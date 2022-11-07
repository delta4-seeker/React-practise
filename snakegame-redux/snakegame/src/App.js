import react, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MoveSnakeRight,
  MoveSnakeLeft,
  MoveSnakeUp,
  MoveSnakeDown,
  addBody,
  SetInputData,
  createBlock,
  gasFee,
  giveReward,
  gameOver,
  pause,
} from "./redux/actions";
import Canvas from "./canvas";
import { AddBody, GasFee } from "./redux/actionTypes";
let movement = true;
let closure = false;
let gameover = false;
const App = () => {
  const handleInput = (event) => {
    event.preventDefault();
    dispatch(SetInputData(event.key));
    dispatch(gasFee());

    switch (event.key) {
      case "ArrowUp":
        bc.shiftPosition();
        dispatch(MoveSnakeUp());

        break;
      case "ArrowDown":
        bc.shiftPosition();

        dispatch(MoveSnakeDown());
        break;
      case "ArrowRight":
        bc.shiftPosition();

        dispatch(MoveSnakeRight());
        break;
      case "ArrowLeft":
        bc.shiftPosition();

        dispatch(MoveSnakeLeft());
        break;
    }
  };

  async function keepMoving(input) {
    switch (input) {
      case "ArrowUp":
        bc.shiftPosition();
        dispatch(MoveSnakeUp());
        break;
      case "ArrowDown":
        bc.shiftPosition();

        dispatch(MoveSnakeDown());
        break;
      case "ArrowRight":
        bc.shiftPosition();

        dispatch(MoveSnakeRight());
        break;
      case "ArrowLeft":
        bc.shiftPosition();

        dispatch(MoveSnakeLeft());
        break;
    }
    await new Promise((resolve) =>
      setTimeout((resolve) => {
        movement = true;
      }, 200)
    );
  }

  useEffect(() => {
    if (!closure) {
      window.addEventListener("keydown", handleInput);

      closure = true;
    }
  });
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const posX = useSelector((state) => state.reducers.posX); // read data
  const posY = useSelector((state) => state.reducers.posY);
  const bc = useSelector((state) => state.reducers.bc);
  const food = useSelector((state) => state.reducers.food);
  const input = useSelector((state) => state.reducers.input);
  const reward = useSelector((state) => state.reducers.reward);
  const balance = useSelector((state) => state.reducers.balance);
  const gas = useSelector((state) => state.reducers.gas);
  const dispatch = useDispatch();
  var img = document.getElementById("cube");
  var mining = document.getElementById("mining");
  var chain = document.getElementById("chain");
  var cube_food = document.getElementById("cube_food");
  const draw = async (ctx, frameCount) => {
    bc.shiftPositionofHead(posX, posY);
    ctx.fillStyle = "#000000";

    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "#ffffff";

    ctx.font = "30px Robot";
    ctx.fillText("Balance : " + balance + " ETH", window.innerWidth - 300, 50);
    ctx.font = "20px Robot";

    ctx.fillText(
      "Reward per Block: " + reward + " ETH",
      window.innerWidth - 300,
      80
    );
    ctx.fillText(
      "Gas Fee per move : " + gas + " ETH",
      window.innerWidth - 300,
      110
    );
    ctx.fill();

    for (let i = 0; i < bc.body.length; i++) {
      ctx.beginPath();
      ctx.lineWidth = 5;

      ctx.strokeStyle = "#ffffff";
      if (i === 0) {
        ctx.moveTo(bc.head.posX + 20, bc.head.posY + 20);
        ctx.lineTo(
          bc.body[bc.body.length - 1].posX + 20,
          bc.body[bc.body.length - 1].posY + 20
        );
        ctx.stroke();
      } else {
        ctx.moveTo(bc.body[i].posX + 20, bc.body[i].posY + 20);
        ctx.lineTo(bc.body[i - 1].posX + 20, bc.body[i - 1].posY + 20);
        ctx.stroke();
      }

      ctx.drawImage(img, bc.body[i].posX, bc.body[i].posY, 40, 40);
    }
    // ctx.strokeRect(bc.head.posX, bc.head.posY, 15, 15);
    ctx.drawImage(img, bc.head.posX, bc.head.posY, 40, 40);
    ctx.drawImage(cube_food, bc.food.posX, bc.food.posY, 40, 40);
    ctx.lineWidth = 0.1;
    ctx.fillStyle = "#ffffff";

    ctx.font = "15px Robot";
    ctx.fillText("M i n i n g...", bc.food.posX - 3, bc.food.posY + 60);
    // ctx.fillRect(bc.head.posX, bc.head.posY, 10, 10);
    ctx.fill();
    ctx.stroke();

    if (
      Math.abs(bc.head.posX - bc.food.posX) < 20 &&
      Math.abs(bc.head.posY - bc.food.posY) < 20
    ) {
      dispatch(addBody());
      dispatch(createBlock());
      dispatch(giveReward());
    }
    if (movement) {
      keepMoving(input);

      movement = false;
    }
    if (balance < 1) {
      dispatch(SetInputData("event.key"));

      ctx.lineWidth = 0.1;
      ctx.fillStyle = "#ff2222";
      ctx.font = "70px Robot";
      ctx.fillText(
        "Balance Zero, Game Over",
        window.innerWidth / 2 - 350,
        window.innerHeight / 3
      );
      ctx.fill();

      await sleep(2000);
      dispatch(gameOver());
    }
  };

  return <Canvas draw={draw} />;
};

export default App;
