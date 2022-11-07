import { MoveRight, MoveLeft, GameOver, MoveUp,Pause ,  MoveDown , ShiftBody , CreateBlock , GasFee , GiveReward , AddBody , ShiftHead , SetInput } from "./actionTypes";
export function MoveSnakeRight() {
  return {
    type: MoveRight,
  };
}

export function MoveSnakeLeft() {
  return {
    type: MoveLeft,
  };
}

export function SetInputData(value) {
  return {
    type: SetInput,
    value , 
  };
}

export function MoveSnakeUp() {
  return {
    type: MoveUp,
  };
}

export function MoveSnakeDown() {
  return {
    type: MoveDown,
  };
}

export function addBody() {
  return {
    type: AddBody,
  };
}

export function shiftHead() {
  return {
    type: ShiftHead,
  };
}

export function shiftBody() {
  return {
    type: ShiftBody,
  };
}

export function createBlock() {
  return {
    type: CreateBlock,
  };
}
export function gasFee() {
  return {
    type: GasFee,
  };
}
export function giveReward() {
  return {
    type: GiveReward,
  };
}
  
  export function pause() {
    return {
      type: Pause,
    }
}export function gameOver() {
  return {
    type: GameOver,
  };
}
