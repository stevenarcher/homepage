/**
 * YouTube Icon
 * ------------
 */

import React from 'react';
import PropTypes from 'prop-types';

function YouTube(props) {
	return (
		<svg width={`${props.width}${props.percent ? '%' : 'px'}`} viewBox="0 0 33 32">
			<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<path
					d="M16.489,13.563 C16.613,13.563 16.71,13.529 16.783,13.461 C16.856,13.393 16.893,13.297 16.893,13.178 L16.893,10.748 C16.893,10.65 16.856,10.572 16.782,10.512 C16.707,10.451 16.61,10.422 16.489,10.422 C16.378,10.422 16.287,10.451 16.217,10.512 C16.149,10.572 16.114,10.65 16.114,10.748 L16.114,13.178 C16.114,13.301 16.147,13.395 16.211,13.461 C16.276,13.531 16.368,13.563 16.489,13.563"
					id="Fill-509"
					fill={props.color}
				/>
				<path
					d="M18.455,21.201 C18.455,21.332 18.432,21.424 18.386,21.48 C18.339,21.539 18.267,21.568 18.167,21.568 C18.099,21.568 18.035,21.553 17.972,21.523 C17.91,21.496 17.845,21.445 17.78,21.381 L17.78,18.857 C17.835,18.801 17.89,18.76 17.947,18.732 C18.003,18.707 18.061,18.693 18.118,18.693 C18.227,18.693 18.312,18.729 18.37,18.799 C18.428,18.869 18.455,18.973 18.455,19.111 L18.455,21.201 Z M18.5,18.051 C18.374,18.051 18.25,18.082 18.126,18.146 C18.005,18.211 17.889,18.307 17.78,18.428 L17.78,16.66 L16.961,16.66 L16.961,22.15 L17.78,22.15 L17.78,21.84 C17.885,21.965 18.002,22.055 18.126,22.113 C18.249,22.174 18.39,22.201 18.549,22.201 C18.788,22.201 18.973,22.127 19.099,21.973 C19.227,21.818 19.289,21.6 19.289,21.314 L19.289,19.066 C19.289,18.734 19.223,18.482 19.087,18.309 C18.952,18.137 18.757,18.051 18.5,18.051 L18.5,18.051 Z"
					fill={props.color}
				/>
				<polyline
					fill={props.color}
					points="10.886 17.459 11.829 17.459 11.829 22.15 12.742 22.15 12.742 17.459 13.686 17.459 13.686 16.66 10.886 16.66 10.886 17.459"
				/>
				<path
					d="M15.543,21.176 C15.467,21.264 15.384,21.336 15.292,21.395 C15.201,21.451 15.125,21.479 15.067,21.479 C14.992,21.479 14.936,21.459 14.901,21.414 C14.868,21.371 14.851,21.303 14.851,21.207 L14.851,18.1 L14.041,18.1 L14.041,21.486 C14.041,21.729 14.089,21.906 14.183,22.027 C14.279,22.15 14.418,22.209 14.607,22.209 C14.758,22.209 14.915,22.168 15.076,22.08 C15.239,21.994 15.394,21.869 15.543,21.705 L15.543,22.15 L16.353,22.15 L16.353,18.1 L15.543,18.1 L15.543,21.176"
					fill={props.color}
				/>
				<path
					d="M24.63,20.902 C24.63,22.516 23.321,23.826 21.707,23.826 L11.552,23.826 C9.938,23.826 8.63,22.516 8.63,20.902 L8.63,18.553 C8.63,16.939 9.938,15.629 11.552,15.629 L21.707,15.629 C23.321,15.629 24.63,16.939 24.63,18.553 L24.63,20.902 Z M12.694,8.176 L13.36,10.594 L13.424,10.594 L14.06,8.176 L15.102,8.176 L13.908,11.715 L13.908,14.223 L12.882,14.223 L12.882,11.826 L11.66,8.176 L12.694,8.176 Z M15.176,10.781 C15.176,10.436 15.299,10.16 15.543,9.957 C15.788,9.752 16.119,9.65 16.534,9.65 C16.91,9.65 17.219,9.758 17.461,9.973 C17.701,10.188 17.821,10.469 17.821,10.807 L17.821,13.111 C17.821,13.494 17.703,13.791 17.468,14.01 C17.231,14.227 16.906,14.336 16.492,14.336 C16.093,14.336 15.774,14.223 15.535,13.998 C15.296,13.773 15.176,13.473 15.176,13.094 L15.176,10.781 Z M18.56,9.762 L19.47,9.762 L19.47,13.182 C19.47,13.287 19.492,13.363 19.529,13.41 C19.566,13.459 19.629,13.482 19.714,13.482 C19.781,13.482 19.867,13.451 19.969,13.389 C20.071,13.324 20.164,13.246 20.249,13.148 L20.249,9.762 L21.161,9.762 L21.161,14.223 L20.249,14.223 L20.249,13.729 C20.082,13.91 19.908,14.051 19.725,14.145 C19.543,14.238 19.368,14.289 19.197,14.289 C18.985,14.289 18.827,14.221 18.72,14.086 C18.614,13.955 18.56,13.756 18.56,13.49 L18.56,9.762 Z M16.63,0 C7.794,0 0.63,7.164 0.63,16 C0.63,24.838 7.794,32 16.63,32 C25.467,32 32.63,24.838 32.63,16 C32.63,7.164 25.467,0 16.63,0 L16.63,0 Z"
					fill={props.color}
				/>
				<path
					d="M21.264,19.592 L20.548,19.592 L20.548,19.184 C20.548,19.014 20.576,18.891 20.632,18.82 C20.689,18.744 20.781,18.707 20.91,18.707 C21.033,18.707 21.124,18.744 21.179,18.82 C21.235,18.891 21.264,19.014 21.264,19.184 L21.264,19.592 Z M20.944,18 C20.581,18 20.287,18.109 20.058,18.33 C19.828,18.551 19.714,18.84 19.714,19.189 L19.714,21.008 C19.714,21.398 19.82,21.705 20.027,21.926 C20.235,22.15 20.521,22.26 20.883,22.26 C21.286,22.26 21.59,22.156 21.791,21.947 C21.996,21.736 22.097,21.424 22.097,21.008 L22.097,20.801 L21.264,20.801 L21.264,20.984 C21.264,21.223 21.236,21.377 21.184,21.447 C21.13,21.518 21.036,21.553 20.902,21.553 C20.773,21.553 20.681,21.512 20.627,21.43 C20.575,21.346 20.548,21.197 20.548,20.984 L20.548,20.223 L22.097,20.223 L22.097,19.189 C22.097,18.805 21.997,18.512 21.798,18.307 C21.6,18.102 21.315,18 20.944,18 L20.944,18 Z"
					fill={props.color}
				/>
			</g>
		</svg>
	);
}

YouTube.propTypes = {
	color: PropTypes.string.isRequired,
	width: PropTypes.number,
	percent: PropTypes.bool,
};

YouTube.defaultProps = {
	width: 33,
	percent: false,
};

export default YouTube;