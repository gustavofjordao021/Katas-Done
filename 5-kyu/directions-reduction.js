// link: https://www.codewars.com/kata/550f22f4d758534c1100025a
// Once upon a time, on a way through the old wild mountainous west,…
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
// Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!

// Example:
// In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
// The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore, the final result is [] (nil in Clojure).
// In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].

// Task
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).

let directions = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

function dirReduc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "NORTH" && arr[i+1] == "SOUTH") {
      arr.splice(i, 2);
      i -= 2;
      continue
    } else if (arr[i] == "SOUTH" && arr[i+1] == "NORTH") {
      arr.splice(i, 2);
      i -= 2;
      continue
    } else if (arr[i] == "EAST" && arr[i+1] == "WEST") {
      arr.splice(i, 2);
      i -= 2;
      continue
    } else if (arr[i] == "WEST" && arr[i+1] == "EAST") {
      arr.splice(i, 2);
      i -= 2;
      continue
    }
  }
  return arr;
}

