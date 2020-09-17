angular
  .module("suitedApp", ["LocalStorageModule"])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix("suited");
  })
  .controller("ApplicationController", function ($scope, localStorageService) {
    $scope.unbind = localStorageService.bind($scope, "datas");
    if ($scope.datas == null) {
      $scope.datas = RANGES;
    }

    $scope.actions = ACTIONS;

    $scope.currentGame = $scope.datas[0];
    $scope.currentDeep = $scope.currentGame.deeps[0];
    $scope.hero = null;
    $scope.vilain = null;
    $scope.currentActions = [];
    $scope.currentAction = null;
    $scope.currentRangeText = "";
    $scope.currentRange = [];
    $scope.selectedCategory = null;
    $scope.rngMode = 0;
    $scope.random = 0;

    $scope.saveRange = function () {
      var allNews = document.querySelectorAll(".selected");
      var range = [];
      allNews.forEach(function (elmt) {
        range.push(elmt.id);
      });
      $scope.selectedCategory.combos = range.toString();
      $scope.refreshRange();
    };

    $scope.refreshRange = function (category, element) {
      $scope.selectedCategory = null;
      $scope.currentRange = $scope.getRange();
    };

    $scope.refreshRange = function (category, element) {
      $scope.selectedCategory = null;
      $scope.currentRange = $scope.getRange();
    };

    $scope.addRange = function () {
      $scope.currentDeep.ranges[$scope.currentRangeText].categories.push({
        "name": "New",
        "combos": "",
        "color": "bg-gray-600"
      });
    };

    $scope.deleteRange = function () {
      var index = $scope.currentDeep.ranges[$scope.currentRangeText].categories.indexOf($scope.selectedCategory);
      $scope.currentDeep.ranges[$scope.currentRangeText].categories.splice(index,1);
      $scope.selectedCategory = null;
    };

    $scope.setRange = function (category, element) {
      var range = [];
      var frequence = [];
      var randomizer =
        $scope.rngMode == 0 ? 0 : Math.floor(Math.random() * (100 - 0)) + 0;

      $scope.selectedCategory = category;

      var copyText = document.querySelector("#copied");
      copyText.type = "text";
      copyText.value = category.combos;
      copyText.select();
      document.execCommand("copy");
      copyText.type = "hidden";
      element.focus();

      const combos = category.combos.split(",");
      combos.forEach((hand) => {
        const combo = hand.split(":");
        const allHands = category.combos == "" ? [] : prange(combo[0]);
        allHands.forEach((oneHand) => {
          if (range[oneHand] == undefined) {
            range[oneHand] = [];
            frequence[oneHand] = 0;
          }
          if (combo[1] == undefined) {
            combo.push(1);
          }
          frequence[oneHand] += combo[1] * 100;
          if (randomizer < frequence[oneHand]) {
            range[oneHand].push({
              value: $scope.rngMode == 0 ? combo[1] * 100 : 100,
              color: category.color,
            });
          }
        });
      });

      $scope.currentRange = range;
    };

    $scope.getRange = function () {
      var range = [];
      var frequence = [];
      var randomizer =
        $scope.rngMode == 0 ? 0 : Math.floor(Math.random() * (100 - 0)) + 0;
      $scope.random =
        $scope.rngMode == 0 ? Math.floor(Math.random() * (100 - 0)) + 0 : randomizer;

      if ($scope.currentDeep.ranges[$scope.currentRangeText] != undefined) {
        $scope.currentDeep.ranges[$scope.currentRangeText].categories.forEach(
          (category) => {
            const combos = category.combos.split(",");
            combos.forEach((hand) => {
              const combo = hand.split(":");
              const allHands = category.combos == "" ? [] : prange(combo[0]);
              allHands.forEach((oneHand) => {
                if (frequence[oneHand] == undefined) {
                  frequence[oneHand] = 0;
                }
                if (combo[1] == undefined) {
                  combo.push(1);
                }
                frequence[oneHand] += combo[1] * 100;
                if (randomizer < frequence[oneHand]) {
                  if ($scope.rngMode == 1) {
                    if (range[oneHand] == undefined) {
                      range[oneHand] = [];
                      range[oneHand].push({
                        value: $scope.rngMode == 0 ? combo[1] * 100 : 100,
                        color: category.color,
                      });
                    }
                  } else {
                    if (range[oneHand] == undefined) {
                      range[oneHand] = [];
                    }
                    range[oneHand].push({
                      value: $scope.rngMode == 0 ? combo[1] * 100 : 100,
                      color: category.color,
                    });
                  }
                }
              });
            });
          }
        );
      }
      return range;
    };

    $scope.turnRNGMode = function (game) {
      $scope.rngMode = $scope.rngMode == 0 ? 1 : 0;
    };
    $scope.reset = function (game) {
      $scope.datas = RANGES;
    };
    $scope.selectGame = function (game) {
      $scope.currentGame = game;
      $scope.currentDeep = game.deeps[0];
      $scope.selectSeat(game.deeps[0].seats[game.deeps[0].seats.length - 1]);
    };
    $scope.selectDeep = function (deep) {
      $scope.currentDeep = deep;
      $scope.selectSeat(game.deeps[0].seats[game.deeps[0].seats.length - 1]);
    };
    $scope.selectAction = function (action) {
      $scope.currentAction = action;
      if ($scope.vilain != null) {
        $scope.currentRangeText =
          $scope.hero + " vs " + $scope.vilain + " " + $scope.currentAction;
        $scope.refreshRange();
      } else {
        $scope.currentRangeText = $scope.hero + " " + $scope.currentAction;
        $scope.refreshRange();
      }
    };
    $scope.selectSeat = function (seat) {
      if ($scope.hero != null) {
        if ($scope.vilain != null) {
          $scope.hero = seat.name;
          $scope.vilain = null;
          $scope.currentActions = ACTIONS.RFI;
          $scope.currentRangeText = $scope.hero + " " + ACTIONS.RFI[0];
          $scope.refreshRange();
        } else {
          if ($scope.hero == seat.name) {
            $scope.vilain = null;
            $scope.currentActions = ACTIONS.RFI;
            $scope.currentRangeText = $scope.hero + " " + ACTIONS.RFI[0];
            $scope.refreshRange();
          } else {
            $scope.vilain = seat.name;
            if (POSITIONS[$scope.hero] < POSITIONS[$scope.vilain]) {
              $scope.currentActions = ACTIONS.IP;
              $scope.currentRangeText =
                $scope.hero +
                " vs " +
                $scope.vilain +
                " " +
                (POSITIONS[$scope.vilain] > 6 ? ACTIONS.IP[1] : ACTIONS.IP[0]);
              $scope.refreshRange();
            } else {
              $scope.currentActions = ACTIONS.OOP;
              $scope.currentRangeText =
                $scope.hero +
                " vs " +
                $scope.vilain +
                " " +
                (POSITIONS[$scope.hero] > 6 ? ACTIONS.OOP[0] : ACTIONS.OOP[1]);
              $scope.refreshRange();
            }
          }
        }
      } else {
        $scope.hero = seat.name;
        $scope.currentActions = ACTIONS.RFI;
        $scope.currentRangeText = $scope.hero + " " + ACTIONS.RFI[0];
        $scope.refreshRange();
      }
    };
  })
  .directive("range", function () {
    return {
      restrict: "E",
      controller: function ($scope) {
        var cartes = ($scope.cartes = [
          "A",
          "K",
          "Q",
          "J",
          "T",
          "9",
          "8",
          "7",
          "6",
          "5",
          "4",
          "3",
          "2",
        ]);
      },
      template:
        '<div class="cursor-default">' +
        '<table class="border-collapse bg-white">' +
        '<tr ng-repeat="carte1 in cartes">' +
        '<td ng-repeat="carte2 in cartes" class="border-solid border border-gray-300 text-center p-0">' +
        '<hand ng-model="currentRange" refresh first="{{carte1}}" second="{{carte2}}"></hand>' +
        "</td>" +
        "</tr>" +
        "</table>" +
        "</div>",
      replace: true,
    };
  })
  .directive("hand", function () {
    return {
      restrict: "E",
      scope: {
        first: "@",
        second: "@",
      },
      link: function ($scope, element, attrs) {
        element.on("click", function () {
          if (element.hasClass("selected") == false) {
            element.addClass("selected");
            element.empty();
            element.append(
              angular.element(
                "<span>" + element.attr("id").substr(0, 2) + "</span>"
              )
            );
            var handWrap = angular.element("<div/>");
            handWrap.addClass(
              "absolute h-full w-full inset-y-0 left-0 z-20 p-1"
            );
            var hand = angular.element("<span/>");
            hand.text(element.attr("id").substr(0, 2));
            handWrap.append(hand);
            element.append(handWrap);
            var child = angular.element("<div/>");
            child.addClass("absolute h-full top-0 z-10 bg-gray-500");
            child.css({
              width: "100%",
              left: "0",
            });
            element.append(child);
          } else {
            element.removeClass("selected");
            element.empty();
            element.append(
              angular.element(
                "<span>" + element.attr("id").substr(0, 2) + "</span>"
              )
            );
          }
        });
        element.on("mouseover", function () {
          if (isMouseDown) {
            if (element.hasClass("selected") == false && !isHighlighted) {
              element.addClass("selected");
              element.empty();
              element.append(
                angular.element(
                  "<span>" + element.attr("id").substr(0, 2) + "</span>"
                )
              );
              var handWrap = angular.element("<div/>");
              handWrap.addClass(
                "absolute h-full w-full inset-y-0 left-0 z-20 p-1"
              );
              var hand = angular.element("<span/>");
              hand.text(element.attr("id").substr(0, 2));
              handWrap.append(hand);
              element.append(handWrap);
              var child = angular.element("<div/>");
              child.addClass("absolute h-full top-0 z-10 bg-gray-500");
              child.css({
                width: "100%",
                left: "0",
              });
              element.append(child);
            } else {
              if (element.hasClass("selected") && isHighlighted) {
                element.removeClass("selected");
                element.empty();
                element.append(
                  angular.element(
                    "<span>" + element.attr("id").substr(0, 2) + "</span>"
                  )
                );
              }
            }
          }
        });
        element.on("mousedown", function () {
          isMouseDown = true;
          isHighlighted = element.hasClass("selected");
        });
        element.on("mouseup", function () {
          isMouseDown = false;
        });
        element.on("dblclick", function () {
          isMouseDown = false;
        });
      },
      controller: function ($scope) {
        $scope.valeurs = {
          A: 14,
          K: 13,
          Q: 12,
          J: 11,
          T: 10,
          "9": 9,
          "8": 8,
          "7": 7,
          "6": 6,
          "5": 5,
          "4": 4,
          "3": 3,
          "2": 2,
        };
      },
      template:
        '<div class="select-none relative z-0 w-full h-full p-1 text-xs">' +
        '<span ng-if="valeurs[first] > valeurs[second]">{{first}}{{second}}</span>' +
        '<span ng-if="valeurs[first] == valeurs[second]">{{first}}{{second}}</span>' +
        '<span ng-if="valeurs[first] < valeurs[second]">{{second}}{{first}}</span>' +
        "</div>",
      replace: true,
    };
  })
  .directive("refresh", function () {
    return {
      require: "ngModel",
      link: function ($scope, $element, $attrs, ngModel) {
        var valeurs = {
          A: 14,
          K: 13,
          Q: 12,
          J: 11,
          T: 10,
          "9": 9,
          "8": 8,
          "7": 7,
          "6": 6,
          "5": 5,
          "4": 4,
          "3": 3,
          "2": 2,
        };
        var combo = "";
        combo =
          valeurs[$attrs.first] > valeurs[$attrs.second]
            ? $attrs.first + $attrs.second + "s"
            : combo;
        combo =
          valeurs[$attrs.first] == valeurs[$attrs.second]
            ? $attrs.first + $attrs.second
            : combo;
        combo =
          valeurs[$attrs.first] < valeurs[$attrs.second]
            ? $attrs.second + $attrs.first + "o"
            : combo;
        $scope.$watch(
          function () {
            return ngModel.$modelValue;
          },
          function (modelValue) {
            $element.empty();
            $element.attr("id", combo);
            $element.removeClass("bg-gray-500");
            $element.append(
              angular.element("<span>" + combo.substr(0, 2) + "</span>")
            );
            if (modelValue[combo] !== undefined) {
              $element.addClass("selected");
              var handWrap = angular.element("<div/>");
              handWrap.addClass(
                "absolute h-full w-full inset-y-0 left-0 z-20 p-1"
              );
              var hand = angular.element("<span/>");
              hand.text(combo.substr(0, 2));
              handWrap.append(hand);
              $element.append(handWrap);

              var left = 0;
              modelValue[combo].forEach((element) => {
                var child = angular.element("<div/>");
                child.addClass("absolute h-full top-0 z-10 " + element.color);
                child.css({
                  width: element.value + "%",
                  left: left + "%",
                });
                $element.append(child);
                left = left + element.value;
              });
            }
          }
        );
      },
    };
  });
