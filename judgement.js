// function get_achievement(x,y,z){
//   let total = x + y + z;

//     if (total >= 250){
//     console.log("A");
//   } else if (total >= 200) {
//     console.log("B");
//   } else if (total >= 100) {
//     console.log("C");
//   } else  {
//     console.log("D");
//   }
// }

// get_achievement(10,10,10)

function get_achivement(x, y, z){
  let sum = x+y+z;
  if(sum >=250){
  return "あなたの成績はAです";
  }else if(sum >=200){
  return "あなたの成績はBです";
  }else if(sum >=150){
  return "あなたの成績はCです";
  }else{
  return "あなたの成績はDです";
  };

  console.log(get_achievement(80,80,80));

  function get_pass_or_failure(x, y, z){
  if(x<60){
  return "不合格";
  }else if(y<60){
  return "不合格";
  }else if(z<60){
  return "不合格";
  }else{
  return "合格";
  }
  };

  console.log(get_pass_or_failure(80,80,80));
  
  function judgement(x, y, z){
    let achievement = get_achievement(x, y, z);
    let pass_or_failure = get_pass_or_failure(x, y, z);
    return `あなたの成績は${achievement}です。${pass_or_failure}です！`;
    };

    console.log(judgement(10,10,10);