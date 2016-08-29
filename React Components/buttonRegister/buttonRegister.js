/**
 * Created by Vivian on 2016-05-09.
 */

'use strict';

(function () {
    var proto = Object.create(HTMLElement.prototype);

    proto.createdCallback = function () {
        this.readAttributes();
        var type = "counter " + this.classtype;
        this.innerHTML =
            "<div class=\""+ type +"\">" +
                "<div class=\"count\">" +
                    "<span class=\"text\">"+ this.count +"</span>" +
                "</div>" +
                "<div class=\"label\">" +
                    "<span class=\"" + this.iconImage + "\"></span>" +
                    "<span class=\"text\">"+ "&nbsp;" + this.text +"</span>" +
                "</div>" +
            "</div>";
    };

    proto.readAttributes = function () {
        this.classtype = this.getAttribute("classtype");
        this.text = this.getAttribute("text");
        this.count = this.getAttribute("count");
        this.iconImage = this.getAttribute("iconImage");
    };

    document.registerElement("x-button", {
        prototype : proto
    });
}());
