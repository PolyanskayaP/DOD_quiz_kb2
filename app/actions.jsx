  const addYes = function (count_yes) {
    return {
      type: "ADD_YES",
      count_yes
    }
  };
  const addNo = function (count_no) {
    return {
      type: "ADD_NO",
      count_no
    }
  };
  const setYesZero = function (count_yes) {
    return {
      type: "SET_YES_ZERO",
      count_yes
    }
  };
  const setNoZero = function (count_no) {
    return {
      type: "SET_NO_ZERO",
      count_no
    }
  };
  module.exports = {addYes, addNo, setYesZero, setNoZero};