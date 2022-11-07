import {
  MoveRight,
  MoveLeft,
  MoveUp,
  MoveDown,
  ShiftBody,
  AddBody,
  SetInput,
  CreateBlock,
  ShiftHead,
  GasFee,
  GiveReward,
  GameOver , Pause
} from "./actionTypes";
import { combineReducers } from "redux";

class Block {
  constructor(x = 60, y = 60) {
    this.posX = x;
    this.posY = y;
  }
}

class BlockChain {
  constructor() {
    this.head = new Block();
    this.body = [];
    this.food = new Block();
    this.addBody();
    this.foodGenerate();
  }

  addBody() {
    if (this.body.length !== 0) {
      let lastBlock = this.body[this.body.length - 1];
      let lastPosX = lastBlock.posX;
      let lastPosY = lastBlock.posY;
      this.body.push(new Block(lastPosX, lastPosY));
    } else {
      let lastBlock = this.head;
      let lastPosX = lastBlock.posX;
      let lastPosY = lastBlock.posY;
      this.body.push(new Block(lastPosX, lastPosY));
    }
  }

  shiftPositionofHead(x, y) {
    this.head.posX = x;
    this.head.posY = y;
  }

  foodGenerate() {
    this.food.posX =
      parseInt((Math.random() * window.innerWidth) / 60 - 1) * 60;
    this.food.posY =
      parseInt((Math.random() * window.innerHeight) / 60 - 1) * 60;

    while (this.body.includes(this.food)) {
      this.food.posX =
        parseInt(((Math.random() * window.innerWidth) % 60) - 1) * 60;
      this.food.posY =
        parseInt(((Math.random() * window.innerHeight) % 60) - 1) * 60;
    }
  }

  shiftPosition() {
    // console.clear();

    for (let i = 0; i < this.body.length - 1; i++) {
      this.body[i].posX = this.body[i + 1].posX;
      this.body[i].posY = this.body[i + 1].posY;
    }

    this.body[this.body.length - 1].posX = this.head.posX;
    this.body[this.body.length - 1].posY = this.head.posY;
  }
}

const initialState = {
  posX: 60,
  posY: 60,
  scale: 60,
  balance: 10,
  reward: 3,
  gas: 1,
  foodX: 0,
  foodY: 0,
  input: "",
  bc: new BlockChain(),
};
const reducers = (state = initialState, actions) => {
  switch (actions.type) {
    case MoveRight:
      return {
        ...state,
        posX: state.posX + state.scale,
      };
    case MoveLeft:
      return {
        ...state,
        posX: state.posX - state.scale,
      };
    case MoveUp:
      return {
        ...state,
        posY: state.posY - state.scale,
      };
    case MoveDown:
      return {
        ...state,
        posY: state.posY + state.scale,
      };
    case GasFee:
      return {
        ...state,
        balance: state.balance - state.gas,
      };
    case GiveReward:
      return {
        ...state,
        balance: state.balance + state.reward,
      };
    case CreateBlock:
      state.bc.foodGenerate();
      return {
        ...state,
      };

      case ShiftHead:
        state.bc.shiftPositionofHead(state.posX, state.posY);
        return {
          ...state,
        };    
      case GameOver:
        return {
          ...state,
          bc : new BlockChain() , 
          balance : initialState.balance  , 
          posX : initialState.posX , 
          posY : initialState.posY , 
          input : ""

        };
        case Pause : 
        return {
          ...state , 
        }

    case ShiftBody:
      state.bc.shiftPosition();
      return {
        ...state,
      };
    case SetInput:
      return {
        ...state,
        input: actions.value,
      };

    case AddBody:
      state.bc.addBody();

      return {
        ...state,
      };

    default:
      return {
        ...state,
      };
  }
};

export default combineReducers({
  reducers,
});
