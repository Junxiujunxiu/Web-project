function CheckOverlap() {
  var qaBox = document.getElementById("qa_nav");
  var memberBox = document.getElementById("membership_nav");
  var staffBox = document.getElementById("staff_nav");
  var newsBox = document.getElementById("news_nav");
  var moreBox = document.getElementById("more");
  var qaDrop = document.getElementById("qa_drop");
  var memberDrop = document.getElementById("member_drop");
  var staffDrop = document.getElementById("staff_drop");
  var newsDrop = document.getElementById("news_drop");
  var rightBoxLeft = document
    .getElementById("rightBox")!
    .getBoundingClientRect().left;
  if (1093 > rightBoxLeft) {
    if (
      qaDrop!.classList.contains("hidden") &&
      memberDrop!.classList.contains("hidden")
    ) {
      qaBox!.classList.add("hidden");
      memberBox!.classList.add("hidden");
      moreBox!.classList.remove("hidden");
      qaDrop!.classList.remove("hidden");
      memberDrop!.classList.remove("hidden");
    }
    if (960 > rightBoxLeft) {
      if (staffDrop!.classList.contains("hidden")) {
        staffBox!.classList.add("hidden");
        staffDrop!.classList.remove("hidden");
      }
      if (832 > rightBoxLeft) {
        if (newsDrop!.classList.contains("hidden")) {
          newsBox!.classList.add("hidden");
          newsDrop!.classList.remove("hidden");
        }
      }
    }
  }

  if (832 < rightBoxLeft) {
    if (newsBox!.classList.contains("hidden")) {
      newsDrop!.classList.add("hidden");
      newsBox!.classList.remove("hidden");
    }
    if (960 < rightBoxLeft) {
      if (staffBox!.classList.contains("hidden")) {
        staffDrop!.classList.add("hidden");
        staffBox!.classList.remove("hidden");
      }
      if (1093 < rightBoxLeft) {
        if (
          memberBox!.classList.contains("hidden") &&
          qaBox!.classList.contains("hidden")
        ) {
          memberDrop!.classList.add("hidden");
          qaDrop!.classList.add("hidden");
          moreBox!.classList.add("hidden");
          memberBox!.classList.remove("hidden");
          qaBox!.classList.remove("hidden");
        }
      }
    }
  }
}

export { CheckOverlap };
