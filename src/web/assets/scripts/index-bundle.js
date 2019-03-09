"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var Index;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  return {
    setters: [],
    execute: function () {
      Index =
      /*#__PURE__*/
      function () {
        function Index() {
          _classCallCheck(this, Index);

          this.btn = $('.form-control');
        }

        _createClass(Index, [{
          key: "view",
          value: function view() {
            this.btn.bind('keydown', function (e) {
              if (e.keyCode == "13") {
                // console.log(e.target.id)
                // console.log(e.target.value)
                window.location.href = "http://localhost:3001/search?".concat(e.target.id, "=").concat(e.target.value); // $.ajax({
                //     url: `http://localhost:3000/search?${e.target.id}=${e.target.value}`,
                //     method: 'get',
                //     // dataType: 'json', // 返回json数据
                //     success: function(res) {
                //         if(res) {
                //             $('html').html(res)
                //         }
                //         console.log(res)
                //     },
                //     error: function(err) {
                //         console.log(err)
                //     }
                // })
              }
            });
          }
        }]);

        return Index;
      }();

      _export("default", Index);
    }
  };
});
