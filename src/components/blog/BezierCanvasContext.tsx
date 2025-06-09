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

export type BezierCanvasContextType = {
  canvases: Record<string, BezierState>;
  setCanvasState: (
    id: string,
    updater: (prev: BezierState) => BezierState
  ) => void;
  registerCanvas: (id: string, defaultState: BezierState) => void;
};

export const BezierCanvasContext = createContext<
  BezierCanvasContextType | undefined
>(undefined);

export const BezierCanvasProvider = ({
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
    <BezierCanvasContext.Provider
      value={{ canvases, setCanvasState, registerCanvas }}
    >
      {children}
    </BezierCanvasContext.Provider>
  );
};

export const useBezierCanvasContext = () => {
  const ctx = useContext(BezierCanvasContext);
  if (!ctx)
    throw new Error(
      'useBezierCanvasContext must be used within a BezierCanvasProvider'
    );
  return ctx;
};

export const BezierCanvasWrapper: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => <BezierCanvasProvider>{children}</BezierCanvasProvider>;
