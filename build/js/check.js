function getMessage(a, b) {
  var numberOfSteps = 0;
  var distancePath = 0;

  if (typeof a == "boolean") {
    if (a == true) {
        return "Я попал в " + b;
      } else {
        return "Я никуда не попал";
      }

  } else if (typeof a == "number") {
      return "Я прыгнул на " + a * 100 + " сантиметров";

  } else if (typeof a == "object" && typeof b =="undefined") {
      if (Array.isArray(a) == true) {
        for (var i = 0; i < a.length; i++) {
          numberOfSteps += a[i];
        }
        return "Я прошёл " + numberOfSteps + " шагов";
      }

  } else if (typeof a == "object" && typeof b =="object") {
      if (Array.isArray(a) == true && Array.isArray(b) == true) {
        for (var i=0; i < a.length; i++) {
          distancePath += a[i]*b[i];
        }
        return "Я прошёл " + distancePath + " метров";
      }
  }

}
