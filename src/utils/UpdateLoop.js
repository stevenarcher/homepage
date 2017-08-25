/**
 * Update Loop
 * -----------
 * used to manage and optimise functions running in an update/game loop
 */
class UpdateLoop {
	/**
	 * Update Loop
	 * @constructor
	 */
	constructor() {
		this._updates = [];
		this._updatesPendingRemoval = [];
		this._lastTimeUpdated = 0;
		this._isUpdating = false;
		this._now =
			window.performance && window.performance.now
				? window.performance.now.bind(window.performance)
				: Date.now
					? Date.now.bind(Date)
					: () => {
							return new Date().getTime();
						};
	}

	/**
	 * Add
	 * @param {IUpdatable} updateToAdd - object that contains a update function
	 */
	add = updateToAdd => {
		this._updates.push(updateToAdd);
	};

	/**
	 * Remove
	 * Updates will be removed at the start of the next loop
	 * @param {IUpdatable} updateToRemove - object that contains a update function
	 */
	remove = updateToRemove => {
		// Error Checking - is the Update in the loop?
		let inUpdateLoop = false;

		this._updates.forEach(update => {
			if (update === updateToRemove) {
				inUpdateLoop = true;
				return;
			}
		});

		if (!inUpdateLoop) {
			console.error('ERROR - Update [' + updateToRemove + '] not found ' + this);
		}

		// Error Checking - is the Update already pending removal?
		this._updatesPendingRemoval.forEach(updatePendingToRemove => {
			if (updatePendingToRemove === updateToRemove) {
				console.error('WARNING - Update [' + updateToRemove + '] is already marked for removal ' + this);
				return;
			}
		});

		// Add to the list of Updates to be removed in the next loop
		if (inUpdateLoop) {
			this._updatesPendingRemoval.push(updateToRemove);
		}
	};

	/**
	 * Remove
	 * Removes immediately
	 * @param {IUpdatable} updateToRemove
	 * @private
	 */
	_remove = updateToRemove => {
		this._updates.forEach((update, index) => {
			if (update === updateToRemove) {
				this._updates.splice(index, 1);
				return;
			}
		});
		console.warn('ERROR - iUpdate [' + updateToRemove + '] not found in the update array ' + this);
	};

	/**
	 * Start Update Loop
	 */
	start = () => {
		if (!this._isUpdating) {
			this._isUpdating = true;
			this._lastTimeUpdated = this._now();
			this._loop();
		} else {
			console.warn('cannot start - is already updating! ' + this);
		}
	};

	/**
	 * Stop Update Loop
	 */
	stop = () => {
		this._isUpdating = false;
	};

	/**
	 * Update Loop
	 * @private
	 */
	_loop = () => {
		if (this._isUpdating) {
			// Check if there are any IUpdatables to remove
			if (this._updatesPendingRemoval.length > 0) {
				this._updatesPendingRemoval.forEach(updateToRemove => {
					this._remove(updateToRemove);
				});
				this._updatesPendingRemoval = [];
			}

			let deltaTime = this._now() - this._lastTimeUpdated;
			if (deltaTime >= 8) {
				let updates = this._updates;
				let i = this._updates.length;
				while (i--) {
					updates[i].update(deltaTime);
				}
				this._lastTimeUpdated = this._now();
			}
		}

		// Continue Looping
		window.requestAnimationFrame(this._loop);
	};
}

const updateLoop = new UpdateLoop();

export default updateLoop;
