function getRest({ stack, rest, alignX }) {
  return stack.map(() => {
    switch (alignX) {
      case "start":
        return 0;
      case "center":
        return rest / 2;
      default:
        return rest;
    }
  });
}

interface ElementAtBreakpoint {
  cols: number;
  left: number;
  right: number;
  total: number;
}

interface Props {
  breakpoints: ElementAtBreakpoint[][];
  colsTotal: number[];
  alignX: string[];
}

export default function restArrayGroupedByBreakpoint({
  breakpoints,
  colsTotal,
  alignX,
}: Props): number[][] {
  return breakpoints.map((breakpoint, index: number) => {
    if (!breakpoint.length) return breakpoint;
    let totalWidth = 0;
    let newBreakpoint = [];
    let elementStack = [];
    for (let i = 0; i < breakpoint.length + 1; i++) {
      let current = breakpoint[i];
      if (current) {
        if (totalWidth + current.total > colsTotal[index]) {
          newBreakpoint = [
            ...newBreakpoint,
            ...getRest({
              stack: elementStack,
              rest: colsTotal[index] - totalWidth,
              alignX: alignX[index],
            }),
          ];
          elementStack = [current];
          totalWidth = 0;
          totalWidth += current.total;
        } else if (totalWidth + current.total === colsTotal[index]) {
          elementStack.push(current);
          newBreakpoint = [...newBreakpoint, ...elementStack.map(() => 0)];
          elementStack = [];
          totalWidth = 0;
        } else {
          elementStack.push(current);
          totalWidth += current.total;
        }
      } else {
        if (totalWidth) {
          newBreakpoint = [
            ...newBreakpoint,
            ...getRest({
              stack: elementStack,
              rest: colsTotal[index] - totalWidth,
              alignX: alignX[index],
            }),
          ];
        }
      }
    }
    return newBreakpoint;
  });
}