class Game {
  constructor(){

  }

  async start(){
    if(gameState === 0){
      form = new Form()
      form.display();
    }

      runner1 = createSprite(100, 200);
      runner2 = createSprite(300, 200);
      runner3 = createSprite(500, 200);
      runner4 = createSprite(700, 200);
    runners = [runner1, runner2, runner3, runner4];
  }

  play(){
    form.hide();

      if (allRunners !== undefined) {
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 175;
      var y;

      for(var run in allRunners){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 200;
        //use data form the database to display the cars in y direction
        y = displayHeight - allRunners[run].distance;
        runners[index-1].x = x;
        runners[index-1].y = y;

          if (index === player.index) {
              stroke(10);
              fill("red");
              ellipse(x, y, 60, 60);
          runners[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = runners[index-1].y
        }
      }

    }

    if(keyIsDown(UP_ARROW) && runner.index !== null){
        runner.distance += 10;
      runner.update();
    }

      if (runner.distance > 5000) {
          gameState = 2;
          runner.rank += 1;
          Runner.updatecarsAtEnd(player.rank);
      }

    drawSprites();
  }
    end() {
        console.log("gameEnded");
        //game.update(2);
        console.log(runner.rank);
    }
}
