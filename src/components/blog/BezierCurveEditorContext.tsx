import React, {
  createContext,
  type FunctionComponent,
  type ReactNode,
  useContext,
  useState,
} from 'react';

type Point = { x: number; y: number };

export type BezierState = {
  start: Point;
  end: Point;
  controlPoints: [Point, Point];
};

export type BezierCurveEditorContextType = {
  canvases: Record<string, BezierState>;
  setCanvasState: (
    id: string,
    updater: (prev: BezierState) => BezierState
  ) => void;
  registerCanvas: (id: string, defaultState: BezierState) => void;
};

export const BezierCurveEditorContext = createContext<
  BezierCurveEditorContextType | undefined
>(undefined);

export const BezierCurveEditorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [canvases, setCanvases] = useState<Record<string, BezierState>>({});

  const registerCanvas = (id: string, defaultState: BezierState) => {
    setCanvases((prev) => {
      if (prev[id]) return prev;
      return { ...prev, [id]: defaultState };
    });
  };

  const setCanvasState = (
    id: string,
    updater: (prev: BezierState) => BezierState
  ) => {
    setCanvases((prev) => ({
      ...prev,
      [id]: updater(prev[id]),
    }));
  };

  return (
    <BezierCurveEditorContext.Provider
      value={{ canvases, setCanvasState, registerCanvas }}
    >
      {children}
    </BezierCurveEditorContext.Provider>
  );
};

export const useBezierCurveEditorContext = () => {
  const ctx = useContext(BezierCurveEditorContext);
  if (!ctx)
    throw new Error(
      'useBezierCurveEditorContext must be used within a BezierCurveEditorProvider'
    );
  return ctx;
};

export const BezierCurveEditorWrapper: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => <BezierCurveEditorProvider>{children}</BezierCurveEditorProvider>;
