var LButtonSample1 = (function () {
    function LButtonSample1(name, size, font, color) {
        var s = this;
        if (!size) {
            size = 16;
        }
        if (!color) {
            color = "#ffffff";
        }
        if (!font) {
            font = "Arial";
        }
        s.backgroundColor = "transparent";
        var btn_up = new LSprite();
        btn_up.shadow = new LSprite();
        btn_up.back = new LSprite();
        btn_up.addChild(btn_up.shadow);
        btn_up.addChild(btn_up.back);
        labelText = new LTextField();
        labelText.color = color;
        labelText.font = font;
        labelText.size = size;
        labelText.x = size * 0.5;
        labelText.y = size * 0.5;
        labelText.text = name;
        s.labelText = labelText;
        btn_up.back.addChild(labelText);
        var shadow = new LDropShadowFilter(4, 45, "#d0f3ff", 10);
        btn_up.shadow.filters = [shadow];
        var btn_down = new LSprite();
        btn_down.x = btn_down.y = 1;
        labelText = labelText.clone();
        btn_down.addChild(labelText);
        var btn_disable = btn_down.clone();
        btn_disable.alpha = 0.5;
        LExtends(s, LButton, [btn_up, btn_down, null, btn_disable]);
        s.type = "LButtonSample1";
        s.baseWidth = s.width = labelText.getWidth() + size;
        s.baseHeight = s.height = 2.2 * size;
        s.backgroundSet = null;
        s.widthSet = null;
        s.heightSet = null;
        s.xSet = null;
        s.ySet = null;
        s.addEventListener(LEvent.ENTER_FRAME, s._onDraw);
    }

    LButtonSample1.prototype.clone = function () {
        var s = this, name = s.labelText.text, size = s.labelText.size, font = s.labelText.font,
            color = s.labelText.color, a = new LButtonSample1(name, size, font, color);
        a.backgroundColor = s.backgroundColor;
        return a;
    };
    LButtonSample1.prototype.setLabel = function (text) {
        var s = this;
        s.bitmap_over.getChildAt(0).text = s.bitmap_up.back.getChildAt(0).text = text;
        s.baseWidth = s.width = s.bitmap_up.back.getChildAt(0).getWidth() + s.bitmap_up.back.getChildAt(0).size;
        s.backgroundSet = null;
    };
    LButtonSample1.prototype._onDraw = function (s) {
        var co = s.getRootCoordinate(), labelText;
        if (s.backgroundSet == s.backgroundColor && s.widthSet == s.width && s.heightSet == s.height && s.xSet == co.x && s.ySet == co.y) {
            return;
        }
        s.backgroundSet = s.backgroundColor;
        s.widthSet = s.width > s.baseWidth ? s.width : s.baseWidth;
        s.heightSet = s.height > s.baseHeight ? s.height : s.baseHeight;
        s.width = s.widthSet;
        s.height = s.heightSet;
        s.xSet = co.x;
        s.ySet = co.y;
        labelText = s.bitmap_up.back.getChildAt(0);
        labelText.x = (s.width - s.baseWidth + labelText.size) * 0.5;
        labelText.y = (s.height - s.baseHeight + labelText.size) * 0.5;
        labelText = s.bitmap_over.getChildAt(0);
        labelText.x = (s.width - s.baseWidth + labelText.size) * 0.5;
        labelText.y = (s.height - s.baseHeight + labelText.size) * 0.5;
        var grd = LGlobal.canvas.createLinearGradient(0, -s.height * 0.5, 0, s.height * 2);
        grd.addColorStop(0, "transparent");
        grd.addColorStop(1, s.backgroundColor);
        var grd2 = LGlobal.canvas.createLinearGradient(0, -s.height, 0, s.height * 2);
        grd2.addColorStop(0, "transparent");
        grd2.addColorStop(1, s.backgroundColor);
        s.bitmap_up.back.graphics.clear();
        s.bitmap_over.graphics.clear();
        s.bitmap_up.shadow.graphics.clear();
        s.bitmap_up.shadow.graphics.drawRoundRect(0, "transparent", [1, 1, s.widthSet - 2, s.heightSet - 2, s.heightSet * 0.1], true, "transparent");
        s.bitmap_up.back.graphics.drawRect(1, s.backgroundColor, [0, 0, s.widthSet, s.heightSet], true, grd);
        s.bitmap_up.back.graphics.drawRect(0, s.backgroundColor, [1, s.heightSet * 0.5, s.widthSet - 2, s.heightSet * 0.5 - 1], true, grd2);
        s.bitmap_over.graphics.drawRect(1, s.backgroundColor, [0, 0, s.widthSet, s.heightSet], true, grd);
        s.bitmap_over.graphics.drawRect(0, s.backgroundColor, [1, s.heightSet * 0.5, s.widthSet - 2, s.heightSet * 0.5 - 1], true, grd2);
        s.disableState.graphics.drawRect(1, s.backgroundColor, [0, 0, s.widthSet, s.heightSet], true, grd);
        s.disableState.graphics.drawRect(0, s.backgroundColor, [1, s.heightSet * 0.5, s.widthSet - 2, s.heightSet * 0.5 - 1], true, grd2);
    };
    return LButtonSample1;
})();
var LButtonSample2 = (function () {
    function LButtonSample2(name, size, font, color) {
        var s = this;
        LExtends(s, LButtonSample1, [name, size, font, color]);
        s.type = "LButtonSample2";
    }

    LButtonSample2.prototype.clone = function () {
        var s = this, name = s.labelText.text, size = s.labelText.size, font = s.labelText.font,
            color = s.labelText.color, a = new LButtonSample2(name, size, font, color);
        a.backgroundColor = s.backgroundColor;
        return a;
    };
    LButtonSample2.prototype._onDraw = function (s) {
        var co = s.getRootCoordinate(), labelText;
        if (s.backgroundSet == s.backgroundColor && s.widthSet == s.width && s.heightSet == s.height && s.xSet == co.x && s.ySet == co.y) {
            return;
        }
        s.backgroundSet = s.backgroundColor;
        s.widthSet = s.width > s.baseWidth ? s.width : s.baseWidth;
        s.heightSet = s.height > s.baseHeight ? s.height : s.baseHeight;
        s.width = s.widthSet;
        s.height = s.heightSet;
        s.xSet = co.x;
        s.ySet = co.y;
        labelText = s.bitmap_up.back.getChildAt(0);
        labelText.x = (s.width - s.baseWidth + labelText.size) * 0.5;
        labelText.y = (s.height - s.baseHeight + labelText.size) * 0.5;
        labelText = s.bitmap_over.getChildAt(0);
        labelText.x = (s.width - s.baseWidth + labelText.size) * 0.5;
        labelText.y = (s.height - s.baseHeight + labelText.size) * 0.5;
        var grd = LGlobal.canvas.createLinearGradient(0, -s.height * 0.5, 0, s.height * 2);
        grd.addColorStop(0, "#FFFFFF");
        grd.addColorStop(1, s.backgroundColor);
        var grd2 = LGlobal.canvas.createLinearGradient(0, -s.height, 0, s.height * 2);
        grd2.addColorStop(0, "#FFFFFF");
        grd2.addColorStop(1, s.backgroundColor);
        s.bitmap_up.back.graphics.clear();
        s.bitmap_over.graphics.clear();
        s.bitmap_up.shadow.graphics.clear();
        s.bitmap_up.back.graphics.drawRoundRect(1, s.backgroundColor, [0, 0, s.width, s.height, s.height * 0.1], true, grd);
        s.bitmap_up.back.graphics.drawRoundRect(0, s.backgroundColor, [1, s.height * 0.5, s.width - 2, s.height * 0.5 - 1, s.height * 0.1], true, grd2);
        s.bitmap_over.graphics.drawRoundRect(1, s.backgroundColor, [0, 0, s.width, s.height, s.height * 0.1], true, grd);
        s.bitmap_over.graphics.drawRoundRect(0, s.backgroundColor, [1, s.height * 0.5, s.width - 2, s.height * 0.5 - 1, s.height * 0.1], true, grd2);
        s.disableState.graphics.drawRoundRect(1, s.backgroundColor, [0, 0, s.width, s.height, s.height * 0.1], true, grd);
        s.disableState.graphics.drawRoundRect(0, s.backgroundColor, [1, s.height * 0.5, s.width - 2, s.height * 0.5 - 1, s.height * 0.1], true, grd2);
    };
    return LButtonSample2;
})();
var LCheckBox = (function () {
    function LCheckBox(layer, layerSelect) {
        var s = this, grd;
        LExtends(s, LSprite, []);
        s.type = "LCheckBox";
        if (!layer) {
            grd = LGlobal.canvas.createLinearGradient(0, -20, 0, 40);
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#CCCCCC");
            layer = new LSprite();
            layer.graphics.drawRoundRect(1, "#CCCCCC", [0, 0, 20, 20, 4], true, grd);
        } else {
            layer = layer.clone();
        }
        if (!layerSelect) {
            grd = LGlobal.canvas.createLinearGradient(0, -20, 0, 20);
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#008000");
            layerSelect = new LSprite();
            layerSelect.graphics.drawLine(5, grd, [4, 10, 12, 16]);
            layerSelect.graphics.drawLine(5, grd, [10, 16, 16, 4]);
        } else {
            layerSelect = layerSelect.clone();
        }
        s.layer = layer;
        s.layerSelect = layerSelect;
        s.addChild(s.layer);
        s.addChild(s.layerSelect);
        s.layerSelect.visible = s.checked = false;
        s.addEventListener(LMouseEvent.MOUSE_UP, s._onChange);
    }

    LCheckBox.prototype._onChange = function (e) {
        var s = e.clickTarget;
        s.checked = !s.checked;
        s.layerSelect.visible = s.checked;
    };
    LCheckBox.prototype.setChecked = function (value) {
        var s = this;
        s.checked = value;
        s.layerSelect.visible = s.checked;
    };
    LCheckBox.prototype.clone = function () {
        var s = this, a = new LCheckBox(s.layer.clone(), s.layerSelect.clone());
        a.setChecked(s.checked);
        return a;
    };
    return LCheckBox;
})();
var LComboBox = (function () {
    function LComboBox(size, color, font, layerBack, layerUp, layerOver) {
        var s = this;
        LExtends(s, LSprite, []);
        s.type = "LComboBox";
        s.list = [];
        s.selectIndex = -1;
        s.value = null;
        s.selectWidth = 100;
        if (!size) {
            size = 16;
        }
        if (!color) {
            color = "#000000";
        }
        if (!font) {
            font = "Arial";
        }
        s.size = size;
        s.color = color;
        s.font = font;
        s.maxIndex = 5;
        if (!layerBack) {
            var back = new LSprite();
            back.graphics.drawRoundRect(1, "#999999", [0, 0, 12, 12, 4], true, "#f5f5f9");
            var bitBack = new LBitmapData(null, 0, 0, 12, 12, LBitmapData.DATA_CANVAS);
            bitBack.draw(back);
            layerBack = new LPanel(bitBack, 200, 30, 4, 8, 4, 8);
        }
        var layer;
        if (!layerUp || !layerOver) {
            var up, down, data;
            grd = LGlobal.canvas.createLinearGradient(0, -20, 0, 40);
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#CCCCCC");
            up = new LSprite();
            up.graphics.drawRoundRect(1, "#CCCCCC", [0, 0, 22, 22, 2], true, grd);
            up.graphics.drawVertices(1, "#CCCCCC", [[6, 6], [16, 6], [11, 18]], true, "#008000");
            data = new LBitmapData(null, 0, 0, 22, 22, LBitmapData.DATA_CANVAS);
            data.draw(up);
            layerUp = new LBitmap(data);
            down = new LSprite();
            down.graphics.drawRoundRect(1, "#CCCCCC", [0, 0, 22, 22, 2], true, grd);
            down.graphics.drawVertices(1, "#CCCCCC", [[6, 6], [16, 6], [11, 18]], true, "#32CD32");
            data = new LBitmapData(null, 0, 0, 22, 22, LBitmapData.DATA_CANVAS);
            data.draw(down);
            layerOver = new LBitmap(data);
        }
        s.minWidth = layerBack.getWidth();
        s.minHeight = layerBack.getHeight();
        var layer1 = layerBack.clone();
        layerUp.x = layer1.getWidth() - layerUp.getWidth() - 4;
        layerUp.y = 4;
        layer1.arraw = layerUp;
        layer1.addChild(layerUp);
        var layer2 = layerBack.clone();
        layerOver.x = layer2.getWidth() - layerOver.getWidth() - 4;
        layerOver.y = 4;
        layer2.arraw = layerOver;
        layer2.addChild(layerOver);
        layer = new LButton(layer1, layer2);
        layer.setCursorEnabled(false);
        layer.staticMode = true;
        s.addChild(layer);
        var label = new LTextField();
        label.x = 4;
        label.y = 4;
        label.text = "";
        label.size = s.size;
        label.color = s.color;
        label.font = s.font;
        layer.addChild(label);
        s.label = label;
        s.layer = layer;
        s.addEventListener(LMouseEvent.MOUSE_UP, s._showChildList);
    }

    LComboBox.ON_CHANGE = "onchange";
    LComboBox.prototype._ll_resize = function () {
        var s = this;
        if (s.list.length == 0) {
            return;
        }
        var txt = new LTextField();
        txt.text = s.list[0].label;
        txt.size = s.size;
        var w = txt.getWidth();
        var h = txt.getHeight();
        if (h + 8 < s.minHeight) {
            h = s.minHeight - 8;
            s.label.y = (h + 8 - txt.getHeight()) * 0.5;
        } else {
            s.label.y = 4;
        }
        if (w + h + 8 < s.minWidth) {
            w = s.minWidth - h - 8;
        }
        var arraw = s.layer.upState.arraw;
        arraw.scaleX = 1;
        arraw.scaleX = arraw.scaleY = h / arraw.getWidth();
        arraw.x = w + 4;
        arraw = s.layer.downState.arraw;
        arraw.scaleX = 1;
        arraw.scaleX = arraw.scaleY = h / arraw.getWidth();
        arraw.x = w + 4;
        s.layer.upState.resize(w + h + 8, h + 8);
        s.layer.downState.resize(w + h + 8, h + 8);
    }, LComboBox.prototype.deleteChild = function (value) {
        var s = this, i, l, delIndex = -1;
        for (i = 0, l = s.list.length; i < l; i++) {
            if (s.list[i].value === value) {
                delIndex = ibreak;
            }
        }
        if (delIndex == -1) {
            return;
        }
        s.list.splice(delIndex, 1);
        if (s.value !== value) {
            return;
        }
        if (s.list.length > 0) {
            s.setValue(s.list[delIndex > 0 ? delIndex - 1 : 0]);
        } else {
            s.selectIndex = -1;
            s.value = null;
        }
        s._ll_resize();
    };
    LComboBox.prototype.setChild = function (child) {
        var s = this, i, l;
        if (!child || typeof child.value == UNDEFINED || typeof child.label == UNDEFINED) {
            throw "the child must be an object like:{label:a,value:b}";
        }
        for (i = 0, l = s.list.length; i < l; i++) {
            if (s.list[i].value === child.value) {
                return;
            }
        }
        s.list.push(child);
        if (s.list.length == 1) {
            s.setValue(child.value);
        }
        s._ll_resize();
    };
    LComboBox.prototype._showChildList = function (event) {
        var s = event.currentTarget;
        s.showChildList();
    };
    LComboBox.prototype.showChildList = function () {
        var s = this, i, l, child, w;
        var textLayer = new LSprite();
        selectLayer = new LSprite();
        textLayer.addChild(selectLayer);
        textLayer.selectLayer = selectLayer;
        textLayer.childHeight = s.size * 1.5 >>> 0;
        for (i = 0, l = s.list.length; i < l; i++) {
            child = s.list[i];
            var text = new LTextField();
            text.size = s.size;
            text.color = s.color;
            text.font = s.font;
            text.text = child.label;
            text.x = 5;
            text.y = 5 + textLayer.childHeight * i;
            textLayer.addChild(text);
        }
        w = textLayer.getWidth();
        if (w < 196) {
            w = 196;
        }
        textLayer.graphics.drawRect(1, "#999999", [0, 0, w + 4, textLayer.childHeight * s.list.length + 4], true, "#f5f5f9");
        selectLayer.graphics.drawRect(0, "#CCCCCC", [2, 2, w, textLayer.childHeight], true, "#CCCCCC");
        selectLayer.y = textLayer.childHeight * s.selectIndex;
        var coordinate = s.getRootCoordinate();
        textLayer.comboBox = s;
        var translucent = new LSprite();
        translucent.graphics.drawRect(0, "#000000", [0, 0, LGlobal.width, LGlobal.height], true, "#000000");
        translucent.alpha = 0;
        LGlobal.stage.addChild(translucent);
        translucent.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
            var cnt = LGlobal.stage.numChildren;
            LGlobal.stage.removeChildAt(cnt - 1);
            LGlobal.stage.removeChildAt(cnt - 2);
        });
        translucent.addEventListener(LMouseEvent.MOUSE_DOWN, function (e) {
        });
        translucent.addEventListener(LMouseEvent.MOUSE_MOVE, function (e) {
        });
        translucent.addEventListener(LMouseEvent.MOUSE_OVER, function (e) {
        });
        translucent.addEventListener(LMouseEvent.MOUSE_OUT, function (e) {
        });
        if (s.list.length > s.maxIndex) {
            var sc = new LScrollbar(textLayer, w, textLayer.childHeight * s.maxIndex, 20, false);
            sc.x = coordinate.x;
            sc.y = coordinate.y + s.layer.getHeight();
            if (sc.y + textLayer.childHeight * s.maxIndex > LGlobal.height) {
                sc.y = LGlobal.height - textLayer.childHeight * s.maxIndex;
            }
            sc.resizeHeight(sc._maskH);
            sc._key["down"] = true;
            sc._key["up"] = false;
            sc._tager = {x: 0, y: 40};
            sc._speed = Math.abs(sc._tager.y - sc._showObject.y);
            sc.setSpeed();
            sc.setScrollY(textLayer.childHeight * s.selectIndex);
            LGlobal.stage.addChild(sc);
        } else {
            textLayer.x = coordinate.x;
            textLayer.y = coordinate.y + s.layer.getHeight();
            if (textLayer.y + textLayer.getHeight() > LGlobal.height) {
                textLayer.y = LGlobal.height - textLayer.getHeight();
            }
            LGlobal.stage.addChild(textLayer);
        }
        textLayer.addEventListener(LMouseEvent.MOUSE_MOVE, s._childSelecting);
        textLayer.addEventListener(LMouseEvent.MOUSE_UP, s._childSelected);
    };
    LComboBox.prototype._childSelecting = function (event) {
        var textLayer = event.currentTarget, i;
        i = event.selfY / textLayer.childHeight >>> 0;
        if (i >= textLayer.comboBox.list.length) {
            return;
        }
        textLayer.selectLayer.y = textLayer.childHeight * i;
    };
    LComboBox.prototype._childSelected = function (event) {
        var textLayer = event.currentTarget, i, v;
        i = event.selfY / textLayer.childHeight >>> 0;
        textLayer.comboBox.setValue(textLayer.comboBox.list[i].value);
        var cnt = LGlobal.stage.numChildren;
        LGlobal.stage.removeChildAt(cnt - 1);
        LGlobal.stage.removeChildAt(cnt - 2);
    };
    LComboBox.prototype.setValue = function (value, noEvent) {
        var s = this, c, i, l;
        if (s.value == value) {
            return;
        }
        c = s.list;
        for (i = 0, l = c.length; i < l; i++) {
            if (c[i].value == value) {
                s.selectIndex = i;
                s.value = s.list[s.selectIndex].value;
                s.label.text = s.list[s.selectIndex].label;
                if (!noEvent) {
                    s.dispatchEvent(LComboBox.ON_CHANGE);
                }
                break;
            }
        }
    };
    LComboBox.prototype.clone = function () {
        var s = this, a = new LComboBox(), k, c;
        for (k in s.list) {
            c = s.list[k];
            a.setChild({label: c.label, value: c.value});
        }
        a.setValue(s.value);
        return a;
    };
    return LComboBox;
})();
var LMenubar = (function () {
    function LMenubar(list, style) {
        var s = this;
        LExtends(s, LSprite, []);
        s.type = "LMenubar";
        if (!style) {
            style = {};
        }
        if (!style.textSize) {
            style.textSize = 20;
        }
        if (!style.horizontalIndent) {
            style.horizontalIndent = 10;
        }
        if (!style.verticalIndent) {
            style.verticalIndent = 5;
        }
        if (!style.textColor) {
            style.textColor = "#000000";
        }
        if (!style.lineColor) {
            style.lineColor = "#CCCCCC";
        }
        if (!style.backgroundColor) {
            style.backgroundColor = "#FFFFFF";
        }
        if (!style.itemBackgroundColor) {
            style.itemBackgroundColor = style.backgroundColor;
        }
        if (!style.selectColor) {
            style.selectColor = "#1E90FF";
        }
        s.style = style;
        var back = new LSprite();
        back.graphics.drawRect(0, "#ffffff", [-LGlobal.width, -LGlobal.height, LGlobal.width * 2, LGlobal.height * 2]);
        s.addChild(back);
        s.back = back;
        s.back.root = s;
        s.back.mainMenu = true;
        s.back.background = true;
        s.back.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
        });
        s.back.addEventListener(LMouseEvent.MOUSE_MOVE, function (e) {
        });
        s.back.addEventListener(LMouseEvent.MOUSE_DOWN, function (e) {
            var root = e.clickTarget.root;
            for (var j = 0; j < root.childList.length; j++) {
                if (root.childList[j].mainMenu) {
                    if (root.childList[j].background) {
                        continue;
                    }
                    var rW = root.childList[j].getWidth();
                    var rH = root.childList[j].getHeight();
                    root.childList[j].graphics.clear();
                    root.childList[j].graphics.drawRect(0, root.style.lineColor, [0, 0, rW, rH], true, root.style.backgroundColor);
                    continue;
                }
                root.childList[j].visible = false;
            }
            root.open = false;
            setTimeout(function () {
                root.back.visible = false;
                root.dispatchEvent(LMenubar.MENU_CLOSE);
            }, 100);
        });
        s.back.visible = false;
        s.setList(s, list, 0, 0, 0);
    }

    LMenubar.MENU_CLOSE = "menu_close";
    LMenubar.prototype.openMainMenu = function (index) {
        var self = this;
        self.mousedown({clickTarget: self.getChildAt(index + 1)});
    };
    LMenubar.prototype.mousedown = function (e) {
        var target = e.clickTarget;
        var root = target.root;
        if (target.mainMenu) {
            if (root.open) {
                return;
            }
            root.open = true;
            root.back.visible = true;
            root.select = target;
            var sW = target.getWidth();
            var sH = target.getHeight();
            target.graphics.clear();
            target.graphics.drawRect(0, root.style.selectColor, [0, 0, sW, sH], true, root.style.selectColor);
            if (target.menuList && target.menuList.length) {
                for (var j = 0; j < target.menuList.length; j++) {
                    target.menuList[j].visible = true;
                    target.menuList[j].graphics.clear();
                    target.menuList[j].graphics.drawRect(1, root.style.lineColor, [0, 0, target.childWidth, target.childHeight], true, root.style.itemBackgroundColor);
                    if (target.menuList[j].arrow) {
                        target.menuList[j].arrow.x = target.childWidth - root.style.horizontalIndent * 2;
                    }
                }
            }
            return;
        }
        if (!target.menuList) {
            if (target.click) {
                target.click({target: root});
                root.open = false;
                setTimeout(function () {
                    root.back.visible = false;
                }, 100);
            }
            for (var j = 0; j < root.childList.length; j++) {
                if (root.childList[j].mainMenu) {
                    continue;
                }
                root.childList[j].visible = false;
            }
        }
    };
    LMenubar.prototype.mousemove = function (e) {
        var target = e.clickTarget;
        var root = target.root;
        if (!root.open) {
            return;
        }
        if (root.select && root.select.objectIndex == target.objectIndex) {
            return;
        }
        if (root.select) {
            var rW = root.select.getWidth();
            var rH = root.select.getHeight();
            root.select.graphics.clear();
            root.select.graphics.drawRect(root.select.mainMenu ? 0 : 1, root.style.lineColor, [0, 0, rW, rH], true, root.select.mainMenu ? root.style.backgroundColor : root.style.itemBackgroundColor);
        }
        var sW = target.getWidth();
        var sH = target.getHeight();
        target.graphics.clear();
        target.graphics.drawRect(0, root.style.selectColor, [0, 0, sW, sH], true, root.style.selectColor);
        if (target.mainMenu) {
            for (var j = 0; j < root.childList.length; j++) {
                if (root.childList[j].mainMenu) {
                    continue;
                }
                root.childList[j].visible = false;
            }
        } else if (root.select.depth == target.depth) {
            if (root.select.menuList && root.select.menuList.length) {
                for (var j = 0; j < root.select.menuList.length; j++) {
                    root.select.menuList[j].visible = false;
                }
            }
        } else if (root.select.depth > target.depth) {
            if (root.select.upper.menuList && root.select.upper.menuList.length) {
                for (var j = 0; j < root.select.upper.menuList.length; j++) {
                    root.select.upper.menuList[j].visible = false;
                }
            }
        }
        if (target.menuList && target.menuList.length) {
            for (var j = 0; j < target.menuList.length; j++) {
                target.menuList[j].visible = true;
                target.menuList[j].graphics.clear();
                target.menuList[j].graphics.drawRect(1, root.style.lineColor, [0, 0, target.childWidth, target.childHeight], true, target.menuList[j].mainMenu ? root.style.backgroundColor : root.style.itemBackgroundColor);
                if (!target.mainMenu) {
                    target.menuList[j].x = target.x + target.getWidth();
                }
                if (target.menuList[j].arrow) {
                    target.menuList[j].arrow.x = target.childWidth - root.style.horizontalIndent * 2;
                }
            }
        }
        root.select = target;
    };
    LMenubar.prototype.mainMenuHide = function (value) {
        var self = this;
        for (var j = 0; j < self.childList.length; j++) {
            if (self.childList[j].mainMenu) {
                self.childList[j].visible = false;
            }
        }
    };
    LMenubar.prototype.setList = function (layer, list, depth, sx, sy) {
        var s = this, w = 0, h = 0, menuList = [];
        layer.childWidth = 0;
        layer.childHeight = 0;
        for (var i = 0; i < list.length; i++) {
            var child = list[i];
            var menu = new LSprite();
            menu.depth = depth;
            menuList.push(menu);
            var label = new LTextField();
            menu.root = s;
            menu.upper = layer;
            menu.click = child.click;
            label.size = s.style.textSize;
            label.color = s.style.textColor;
            label.text = child.label;
            label.x = s.style.horizontalIndent;
            label.y = s.style.verticalIndent;
            menu.addChild(label);
            menu.graphics.drawRect(0, s.style.backgroundColor, [0, 0, label.getWidth() + s.style.horizontalIndent * 2, label.getHeight() + s.style.verticalIndent * 2], true, s.style.backgroundColor);
            menu.addEventListener(LMouseEvent.MOUSE_DOWN, s.mousedown);
            menu.addEventListener(LMouseEvent.MOUSE_MOVE, s.mousemove);
            if (s.objectIndex == layer.objectIndex) {
                menu.x = w + sx;
                menu.y = 0 + sy;
                menu.mainMenu = true;
                w += label.getWidth() + s.style.horizontalIndent * 2;
                h = label.getHeight() + s.style.verticalIndent * 2;
                if (layer.childWidth < label.getWidth() + s.style.horizontalIndent * 2) {
                    layer.childWidth = label.getWidth() + s.style.horizontalIndent * 2;
                }
                if (layer.childHeight < label.getHeight() + s.style.verticalIndent * 2) {
                    layer.childHeight = label.getHeight() + s.style.verticalIndent * 2;
                }
            } else {
                menu.x = 0 + sx;
                menu.y = h + sy;
                w = w > label.getWidth() + s.style.horizontalIndent * 4 ? w : label.getWidth() + s.style.horizontalIndent * 4;
                h += label.getHeight() + s.style.verticalIndent * 2;
                if (layer.childWidth < label.getWidth() + s.style.horizontalIndent * 4) {
                    layer.childWidth = label.getWidth() + s.style.horizontalIndent * 4;
                }
                if (layer.childHeight < label.getHeight() + s.style.verticalIndent * 2) {
                    layer.childHeight = label.getHeight() + s.style.verticalIndent * 2;
                }
            }
            s.addChild(menu);
            if (child.list && child.list.length > 0) {
                if (s.objectIndex == layer.objectIndex) {
                    s.setList(menu, child.list, depth + 1, menu.x, menu.y + menu.getHeight());
                } else {
                    var arrow = new LSprite();
                    menu.arrow = arrow;
                    menu.addChild(arrow);
                    arrow.x = label.getWidth() + s.style.horizontalIndent * 2;
                    arrow.y = label.y;
                    arrow.graphics.drawVertices(0, s.style.textColor, [[0, 0], [0, label.getHeight()], [s.style.horizontalIndent, label.getHeight() * 0.5]], true, s.style.textColor);
                    s.setList(menu, child.list, depth + 1, menu.x + menu.getWidth() + s.style.horizontalIndent * 2, menu.y);
                }
            }
            if (s.objectIndex != layer.objectIndex) {
                menu.visible = false;
            }
        }
        layer.menuList = menuList;
    };
    return LMenubar;
})();
var LMessageBox = (function () {
    function LMessageBox() {
    }

    LMessageBox.show = function (properties) {
        if (!properties.width) {
            properties.width = 500;
        }
        if (!properties.height) {
            properties.height = 300;
        }
        if (!properties.title) {
            properties.title = "";
        }
        if (!properties.size) {
            properties.size = 16;
        }
        if (!properties.textHeight) {
            properties.textHeight = 35;
        }
        if (properties.displayObject) {
            properties.width = properties.displayObject.getWidth();
            properties.height = properties.displayObject.getHeight();
        }
        var translucent = new LSprite();
        translucent.graphics.drawRect(0, "#000000", [0, 0, LGlobal.width, LGlobal.height], true, "#000000");
        translucent.alpha = 0.5;
        LGlobal.stage.addChild(translucent);
        translucent.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
        });
        translucent.addEventListener(LMouseEvent.MOUSE_DOWN, function (e) {
        });
        translucent.addEventListener(LMouseEvent.MOUSE_MOVE, function (e) {
        });
        translucent.addEventListener(LMouseEvent.MOUSE_OVER, function (e) {
        });
        translucent.addEventListener(LMouseEvent.MOUSE_OUT, function (e) {
        });
        var myWindow = new LWindow(properties.width, properties.height, properties.title);
        myWindow.x = (LGlobal.width - myWindow.getWidth()) * 0.5;
        myWindow.y = (LGlobal.height - myWindow.getHeight()) * 0.5;
        LGlobal.stage.addChild(myWindow);
        myWindow.addEventListener(LWindow.CLOSE, function (e) {
            translucent.die();
            translucent.remove();
        });
        if (properties.displayObject) {
            myWindow.layer.addChild(properties.displayObject);
            return;
        }
        var msgLabel = new LTextField();
        msgLabel.width = properties.width - 100;
        msgLabel.setWordWrap(true, properties.textHeight);
        msgLabel.text = properties.message;
        msgLabel.x = (properties.width - msgLabel.width) * 0.5;
        msgLabel.y = (properties.height - myWindow.bar.getHeight() - msgLabel.getHeight()) * 0.5;
        myWindow.layer.addChild(msgLabel);
    };
    return LMessageBox;
})();
var LPanel = (function () {
    function LPanel(bitmapData, w, h, x1, x2, y1, y2) {
        var s = this;
        LExtends(s, LSprite, []);
        s.type = "LPanel";
        if (typeof bitmapData == "string") {
            var d = new LShape();
            d.graphics.drawRoundRect(1, "#000000", [0, 0, 20, 20, 5], true, bitmapData);
            bitmapData = new LBitmapData(null, 0, 0, 20, 20);
            bitmapData.draw(d);
        }
        s.x1 = x1 ? x1 : bitmapData.width * 0.4;
        s.x2 = x2 ? x2 : bitmapData.width * 0.6;
        s.y1 = y1 ? y1 : bitmapData.height * 0.4;
        s.y2 = y2 ? y2 : bitmapData.height * 0.6;
        s.bitmapData = bitmapData;
        var ltData = new LBitmapData(bitmapData.image, bitmapData.x, bitmapData.y, s.x1, s.y1);
        var mtData = new LBitmapData(bitmapData.image, bitmapData.x + s.x1, bitmapData.y, s.x2 - s.x1, s.y1);
        var rtData = new LBitmapData(bitmapData.image, bitmapData.x + s.x2, bitmapData.y, bitmapData.width - s.x2, s.y1);
        var lmData = new LBitmapData(bitmapData.image, bitmapData.x, bitmapData.y + s.y1, s.x1, s.y2 - s.y1);
        var mmData = new LBitmapData(bitmapData.image, bitmapData.x + s.x1, bitmapData.y + s.y1, s.x2 - s.x1, s.y2 - s.y1);
        var rmData = new LBitmapData(bitmapData.image, bitmapData.x + s.x2, bitmapData.y + s.y1, bitmapData.width - s.x2, s.y2 - s.y1);
        var lbData = new LBitmapData(bitmapData.image, bitmapData.x, bitmapData.y + s.y2, s.x1, bitmapData.height - s.y2);
        var mbData = new LBitmapData(bitmapData.image, bitmapData.x + s.x1, bitmapData.y + s.y2, s.x2 - s.x1, bitmapData.height - s.y2);
        var rbData = new LBitmapData(bitmapData.image, bitmapData.x + s.x2, bitmapData.y + s.y2, bitmapData.width - s.x2, bitmapData.height - s.y2);
        s.ltBitmap = new LBitmap(ltData);
        s.addChild(s.ltBitmap);
        s.mtBitmap = new LBitmap(mtData);
        s.mtBitmap.x = s.x1 - 1;
        s.addChild(s.mtBitmap);
        s.rtBitmap = new LBitmap(rtData);
        s.addChild(s.rtBitmap);
        s.lmBitmap = new LBitmap(lmData);
        s.lmBitmap.y = s.y1 - 1;
        s.addChild(s.lmBitmap);
        s.mmBitmap = new LBitmap(mmData);
        s.mmBitmap.x = s.x1 - 1;
        s.mmBitmap.y = s.y1 - 1;
        s.addChild(s.mmBitmap);
        s.rmBitmap = new LBitmap(rmData);
        s.rmBitmap.y = s.y1 - 1;
        s.addChild(s.rmBitmap);
        s.lbBitmap = new LBitmap(lbData);
        s.addChild(s.lbBitmap);
        s.mbBitmap = new LBitmap(mbData);
        s.mbBitmap.x = s.x1 - 1;
        s.addChild(s.mbBitmap);
        s.rbBitmap = new LBitmap(rbData);
        s.addChild(s.rbBitmap);
        s.resize(w, h);
    }

    LPanel.prototype.resize = function (w, h) {
        var s = this;
        s._ll_w = w;
        s._ll_h = h;
        s.rtBitmap.x = s.rmBitmap.x = s.rbBitmap.x = w - (s.bitmapData.width - s.x2);
        s.lbBitmap.y = s.mbBitmap.y = s.rbBitmap.y = h - (s.bitmapData.height - s.y2);
        s.lmBitmap.scaleY = s.mmBitmap.scaleY = s.rmBitmap.scaleY = (h - s.y1 - (s.bitmapData.height - s.y2) + 2) / (s.y2 - s.y1);
        s.mtBitmap.scaleX = s.mmBitmap.scaleX = s.mbBitmap.scaleX = (w - s.x1 - (s.bitmapData.width - s.x2) + 2) / (s.x2 - s.x1);
    };
    LPanel.prototype.clone = function () {
        var s = this;
        return new LPanel(s.bitmapData.clone(), s._ll_w, s._ll_h, s.x1, s.x2, s.y1, s.y2);
    };
    return LPanel;
})();
var LRadioChild = (function () {
    function LRadioChild(value, layer, layerSelect) {
        var s = this, grd;
        LExtends(s, LSprite, []);
        s.type = "LRadioChild";
        s.value = value;
        if (!layer) {
            grd = LGlobal.canvas.createLinearGradient(0, -20, 0, 40);
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#CCCCCC");
            layer = new LSprite();
            layer.graphics.drawArc(1, "#CCCCCC", [0, 0, 10, 0, 2 * Math.PI], true, grd);
        } else {
            layer = layer.clone();
        }
        if (!layerSelect) {
            grd = LGlobal.canvas.createLinearGradient(0, -20, 0, 20);
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#008000");
            layerSelect = new LSprite();
            layerSelect.graphics.drawArc(1, grd, [0, 0, 5, 0, 2 * Math.PI], true, grd);
        } else {
            layerSelect = layerSelect.clone();
        }
        s.layer = layer;
        s.layerSelect = layerSelect;
        s.addChild(s.layer);
        s.addChild(s.layerSelect);
        s.layerSelect.visible = false;
        s.checked = false;
        s.addEventListener(LMouseEvent.MOUSE_UP, s._onChange);
    }

    LRadioChild.prototype.clone = function () {
        var s = this, a = new LRadioChild(s.value, s.layer, s.layerSelect);
        a.copyProperty(s);
        return a;
    };
    LRadioChild.prototype._onChange = function (e) {
        var s = e.clickTarget;
        s.parent.setValue(s.value);
    };
    LRadioChild.prototype.setChecked = function (v) {
        this.layerSelect.visible = this.checked = v;
    };
    return LRadioChild;
})();
var LRadio = (function () {
    function LRadio() {
        var s = this;
        LExtends(s, LSprite, []);
        s.type = "LRadio";
        s.value = null;
    }

    LRadio.prototype.setChildRadio = function (value, x, y, layer, layerSelect) {
        var s = this;
        var child = new LRadioChild(value, layer, layerSelect);
        child.x = x;
        child.y = y;
        s.addChild(child);
        return child;
    };
    LRadio.prototype.push = function (value) {
        this.addChild(value);
    };
    LRadio.prototype.setValue = function (value) {
        var s = this, child, k;
        for (k in s.childList) {
            child = s.childList[k];
            if (child.setChecked) {
                child.setChecked(false);
            }
            if (child.value == value) {
                s.value = value;
                child.setChecked(true);
            }
        }
    };
    LRadio.prototype.clone = function () {
        var s = this, a = new LRadio(), child, k;
        for (k in s.childList) {
            child = s.childList[k].clone();
            a.push(child);
        }
        a.setValue(s.value);
        return a;
    };
    return LRadio;
})();
var LRange = (function () {
    function LRange() {
        var s = this, w, h, param;
        LExtends(s, LSprite, []);
        s.type = "LRange";
        s.value = 0;
        if (arguments.length == 0) {
            param = {width: 200};
        } else if (arguments.length == 1 && typeof arguments[0] == "number") {
            param = {width: arguments[0]};
        } else if (arguments.length == 2) {
            param = {backLayer: arguments[0], selectLayer: arguments[1]};
        } else {
            throw "LRange's param is wrong";
        }
        if (param["backLayer"] && param["selectLayer"]) {
            var backLayer = param["backLayer"];
            s.sign = param["selectLayer"];
            h = backLayer.getHeight() > s.sign.getHeight() ? backLayer.getHeight() : s.sign.getHeight();
            backLayer.y = (h - backLayer.getHeight()) * 0.5;
            s.w = backLayer.getWidth();
            s.graphics.drawRect(0, "#FFFFFF", [-50, 0, s.w + 100, h]);
            s.addChild(backLayer);
        } else {
            s.w = param["width"];
            s.graphics.drawRect(0, "#FFFFFF", [-50, 0, s.w + 100, s.w * 0.13]);
            var grd = LGlobal.canvas.createLinearGradient(0, 0, 0, s.w * 0.13);
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#CCCCCC");
            s.color = grd;
            s.graphics.drawRect(1, "#CCCCCC", [0, s.w * 0.04, s.w, s.w * 0.03], true, s.color);
            s.sign = new LSprite();
            s.sign.graphics.drawVertices(1, "#CCCCCC", [[0, 0], [s.w * 0.05, 0], [s.w * 0.05, s.w * 0.1], [s.w * 0.025, s.w * 0.13], [0, s.w * 0.1]], true, s.color);
        }
        s.addChild(s.sign);
        s.sign.x = -s.sign.getWidth() * 0.5;
        s.addEventListener(LMouseEvent.MOUSE_DOWN, s._onDown);
    }

    LRange.prototype.clone = function () {
        var s = this, a = new LRange(s.w);
        a.copyProperty(s);
        return a;
    };
    LRange.prototype._onDown = function (event) {
        var s = event.clickTarget;
        if (event.selfX < -s.sign.getWidth() * 0.5 || event.selfX > s.w + s.sign.getWidth() * 0.5) {
            return;
        }
        if (s.down) {
            return;
        }
        s.down = true;
        s.sign.x = event.selfX - s.sign.getWidth() * 0.5;
        if (s.sign.x < -s.sign.getWidth() * 0.5) {
            s.sign.x = -s.sign.getWidth() * 0.5;
        }
        if (s.sign.x > s.w - s.sign.getWidth() * 0.5) {
            s.sign.x = s.w - s.sign.getWidth() * 0.5;
        }
        s._DownX = s.sign.x;
        s._OffsetX = event.selfX;
        s._getValue();
        s.addEventListener(LMouseEvent.MOUSE_MOVE, s._onMove);
        LGlobal.stage._ll_range = s;
        LGlobal.stage.addEventListener(LMouseEvent.MOUSE_UP, s._onUp);
    };
    LRange.prototype._getValue = function () {
        var s = this;
        s.value = Math.floor((s.sign.x + s.sign.getWidth() * 0.5) * 100 / s.w);
    };
    LRange.prototype._onMove = function (event) {
        var s = event.clickTarget;
        s.sign.x = s._DownX + event.selfX - s._OffsetX;
        if (s.sign.x < -s.sign.getWidth() * 0.5) {
            s.sign.x = -s.sign.getWidth() * 0.5;
        }
        if (s.sign.x > s.w - s.sign.getWidth() * 0.5) {
            s.sign.x = s.w - s.sign.getWidth() * 0.5;
        }
        s._getValue();
    };
    LRange.prototype._onUp = function (event) {
        var s = LGlobal.stage._ll_range;
        s.down = false;
        s.removeEventListener(LMouseEvent.MOUSE_MOVE, s._onMove);
        LGlobal.stage.removeEventListener(LMouseEvent.MOUSE_UP, s._onUp);
    };
    return LRange;
})();
var LScrollbar = (function () {
    function LScrollbar(showObject, maskW, maskH, param, wVisible, hVisible) {
        var s = this;
        LExtends(s, LSprite, []);
        s.type = "LScrollbar";
        s._showLayer = new LSprite();
        s._mask = new LGraphics();
        s._mask.drawRect(0, "#ffffff", [0, 0, maskW, maskH], false, "#ffffff");
        s._showLayer.graphics.drawRect(0, "#ffffff", [0, 0, maskW, maskH], false, "#ffffff");
        s._wVisible = typeof wVisible == UNDEFINED ? true : wVisible;
        s._hVisible = typeof hVisible == UNDEFINED ? true : wVisible;
        s.addChild(s._showLayer);
        s._width = 0;
        s._height = 0;
        s._showObject = showObject;
        s._showLayer.addChild(showObject);
        s._showObject.mask = s._mask;
        if (!param) {
            s._scrollWidth = 20;
            s._selectHeight = s._scrollWidth * 1.5;
        } else if (typeof param == "number") {
            s._scrollWidth = param;
            s._selectHeight = s._scrollWidth * 1.5;
        } else if (typeof param == "object") {
            s._ll_bar_back = param["back"];
            s._ll_bar_select = param["select"];
            s._ll_bar_arraw = param["arraw"];
            s._scrollWidth = s._ll_bar_back.getWidth();
            s._selectHeight = s._ll_bar_select.getHeight();
        }
        s._target = {x: 0, y: 0};
        s._maskW = maskW;
        s._maskH = maskH;
        s.excluding = false;
        s.addEventListener(LEvent.ENTER_FRAME, s.onFrame);
        s.dispatchEvent(LEvent.ENTER_FRAME);
    }

    LScrollbar.prototype.clone = function () {
        var s = this,
            a = new LScrollbar(s._showObject.clone(), s._maskW, s._maskH, s._scrollWidth, s._wVisible, s._hVisible);
        a.copyProperty(s);
        return a;
    };
    LScrollbar.prototype.onFrame = function (event) {
        var s = event.currentTarget, w, h, i, l, child;
        w = s._showObject.getWidth();
        h = s._showObject.getHeight();
        if (s._wVisible && s._width != w) {
            s._width = w;
            if (s._width > s._maskW) {
                s.resizeWidth(true);
                s.moveLeft();
            } else {
                s.resizeWidth(false);
            }
        }
        if (s._hVisible && s._height != h) {
            s._height = h;
            if (s._height > s._maskH) {
                s.resizeHeight(true);
                s.moveUp();
            } else {
                s.resizeHeight(false);
            }
        }
        if (s.excluding) {
            for (i = 0, l = s._showObject.numChildren; i < l; i++) {
                child = s._showObject.getChildAt(i);
                if (child.x + s._showObject.x > s._maskW || child.x + child.getWidth() + s._showObject.x < 0 || child.y + s._showObject.y > s._maskH || child.y + child.getHeight() + s._showObject.y < 0) {
                    child.visible = false;
                } else {
                    child.visible = true;
                }
            }
        }
        if (s._key == null) {
            return;
        }
        if (s._key["up"]) {
            s.moveUp();
        }
        if (s._key["down"]) {
            s.moveDown();
        }
        if (s._key["left"]) {
            s.moveLeft();
        }
        if (s._key["right"]) {
            s.moveRight();
        }
    };
    LScrollbar.prototype.resizeWidth = function (value) {
        var s = this, grd, grdb;
        if (!value) {
            if (s._scroll_w != null) {
                s._scroll_w.parent.removeChild(s._scroll_w);
                s._scroll_w_bar.parent.removeChild(s._scroll_w_bar);
                s._scroll_w = null;
                s._scroll_w_bar = null;
            }
            return;
        }
        var i;
        if (s._scroll_w_bar == null) {
            if (s._key == null) {
                s._key = [];
            }
            s._scroll_w = new LSprite();
            s._scroll_w_bar = new LSprite();
            s.addChild(s._scroll_w);
            s.addChild(s._scroll_w_bar);
            var ny = s._scrollWidth * 1.5;
            s._scroll_w.x = 0;
            s._scroll_w.y = s._maskH;
            s._scroll_w_bar.x = s._scrollWidth;
            s._scroll_w_bar.y = s._maskH;
            grd = LGlobal.canvas.createLinearGradient(0, 0, 0, s._scrollWidth * 2);
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#008000");
            grdb = LGlobal.canvas.createLinearGradient(0, 0, 0, s._scrollWidth);
            grdb.addColorStop(0, "#FFFFFF");
            grdb.addColorStop(1, "#CCCCCC");
            if (s._ll_bar_select) {
                s._ll_bar_select_w = s._ll_bar_select.clone();
                s._ll_bar_select_w.rotateCenter = false;
                s._ll_bar_select_w.x = s._selectHeight;
                s._ll_bar_select_w.rotate = 90;
                s._scroll_w_bar.addChild(s._ll_bar_select_w);
            } else {
                s._scroll_w_bar.graphics.drawRoundRect(1, "#CCCCCC", [0, 0, s._scrollWidth * 1.5, s._scrollWidth, s._scrollWidth * 0.5], true, grd);
            }
            if (s._ll_bar_back) {
                s._ll_bar_back_w = s._ll_bar_back.clone();
                s._ll_bar_back_w.rotateCenter = false;
                s._ll_bar_back_w.x = s._maskW - s._scrollWidth;
                s._ll_bar_back_w.rotate = 90;
                s._scroll_w.addChild(s._ll_bar_back_w);
            } else {
                s._scroll_w.graphics.drawRoundRect(1, "#CCCCCC", [s._scrollWidth, 0, s._mask.getWidth() - s._scrollWidth * 2, s._scrollWidth, s._scrollWidth * 0.5], true, grdb);
            }
            if (s._ll_bar_back) {
                s._ll_bar_arraw_left = s._ll_bar_arraw.clone();
                s._ll_bar_arraw_left.rotateCenter = false;
                s._ll_bar_arraw_left.y = s._scrollWidth;
                s._ll_bar_arraw_left.rotate = -90;
                s._scroll_w.addChild(s._ll_bar_arraw_left);
            } else {
                s._scroll_w.graphics.drawRect(0, "#000000", [0, 0, s._scrollWidth, s._scrollWidth]);
                s._scroll_w.graphics.drawVertices(1, "#CCCCCC", [[s._scrollWidth * 0.75, s._scrollWidth * 0.25], [s._scrollWidth * 0.75, s._scrollWidth * 0.75], [s._scrollWidth * 0.25, s._scrollWidth * 0.5]], true, grd);
            }
            if (s._ll_bar_back) {
                s._ll_bar_arraw_left = s._ll_bar_arraw.clone();
                s._ll_bar_arraw_left.rotateCenter = false;
                s._ll_bar_arraw_left.x = s._maskW;
                s._ll_bar_arraw_left.rotate = 90;
                s._scroll_w.addChild(s._ll_bar_arraw_left);
            } else {
                s._scroll_w.graphics.drawRect(0, "#000000", [s._mask.getWidth() - s._scrollWidth, 0, s._scrollWidth, s._scrollWidth]);
                s._scroll_w.graphics.drawVertices(1, "#CCCCCC", [[s._mask.getWidth() - s._scrollWidth * 0.75, s._scrollWidth * 0.25], [s._mask.getWidth() - s._scrollWidth * 0.75, s._scrollWidth * 0.75], [s._mask.getWidth() - s._scrollWidth * 0.25, s._scrollWidth * 0.5]], true, grd);
            }
            if (!s.hasEventListener(LMouseEvent.MOUSE_DOWN)) {
                s.addEventListener(LMouseEvent.MOUSE_DOWN, s.mouseDown);
            }
        }
    };
    LScrollbar.prototype.resizeHeight = function (value) {
        var s = this, grd, grdb;
        if (!value) {
            if (s._scroll_h != null) {
                s._scroll_h.parent.removeChild(s._scroll_h);
                s._scroll_h_bar.parent.removeChild(s._scroll_h_bar);
                s._scroll_h = null;
                s._scroll_h_bar = null;
            }
            return;
        }
        var i;
        if (s._scroll_h_bar == null) {
            if (s._key == null) {
                s._key = [];
            }
            s._scroll_h = new LSprite();
            s._scroll_h_bar = new LSprite();
            s.addChild(s._scroll_h);
            s.addChild(s._scroll_h_bar);
            var ny = s._scrollWidth * 1.5;
            s._scroll_h.x = s._maskW;
            s._scroll_h.y = 0;
            s._scroll_h_bar.x = s._maskW;
            s._scroll_h_bar.y = s._scrollWidth;
            grd = LGlobal.canvas.createLinearGradient(0, 0, s._scrollWidth * 2, 0);
            grd.addColorStop(0, "#FFFFFF");
            grd.addColorStop(1, "#008000");
            grdb = LGlobal.canvas.createLinearGradient(0, 0, s._scrollWidth, 0);
            grdb.addColorStop(0, "#FFFFFF");
            grdb.addColorStop(1, "#CCCCCC");
            if (s._ll_bar_select) {
                s._scroll_h_bar.addChild(s._ll_bar_select);
            } else {
                s._scroll_h_bar.graphics.drawRoundRect(1, "#CCCCCC", [0, 0, s._scrollWidth, s._scrollWidth * 1.5, s._scrollWidth * 0.5], true, grd);
            }
            if (s._ll_bar_back) {
                s._ll_bar_back_h = s._ll_bar_back.clone();
                s._ll_bar_back_h.y = (s._mask.getHeight() - s._ll_bar_back_h.getHeight()) * 0.5;
                s._scroll_h.addChild(s._ll_bar_back_h);
            } else {
                s._scroll_h.graphics.drawRoundRect(1, "#CCCCCC", [0, s._scrollWidth, s._scrollWidth, s._mask.getHeight() - s._scrollWidth * 2, s._scrollWidth * 0.5], true, grdb);
            }
            if (s._ll_bar_back) {
                s._ll_bar_arraw_up = s._ll_bar_arraw.clone();
                s._scroll_h.addChild(s._ll_bar_arraw_up);
            } else {
                s._scroll_h.graphics.drawRect(0, "#000000", [0, 0, s._scrollWidth, s._scrollWidth]);
                s._scroll_h.graphics.drawVertices(1, "#CCCCCC", [[s._scrollWidth / 4, s._scrollWidth * 0.75], [s._scrollWidth / 2, s._scrollWidth / 4], [s._scrollWidth * 0.75, s._scrollWidth * 0.75]], true, grd);
            }
            if (s._ll_bar_back) {
                s._ll_bar_arraw_down = s._ll_bar_arraw.clone();
                s._ll_bar_arraw_down.scaleY = -1;
                s._ll_bar_arraw_down.y = s._mask.getHeight();
                s._scroll_h.addChild(s._ll_bar_arraw_down);
            } else {
                s._scroll_h.graphics.drawRect(0, "#000000", [0, s._mask.getHeight() - s._scrollWidth, s._scrollWidth, s._scrollWidth]);
                s._scroll_h.graphics.drawVertices(1, "#CCCCCC", [[s._scrollWidth / 4, s._mask.getHeight() - s._scrollWidth * 0.75], [s._scrollWidth / 2, s._mask.getHeight() - s._scrollWidth * 0.25], [s._scrollWidth * 0.75, s._mask.getHeight() - s._scrollWidth * 0.75]], true, grd);
            }
            if (!s.hasEventListener(LMouseEvent.MOUSE_DOWN)) {
                s.addEventListener(LMouseEvent.MOUSE_DOWN, s.mouseDown);
            }
        }
    };
    LScrollbar.prototype.moveLeft = function () {
        var s = this;
        if (!s._key["Dkey"] && s._showObject.x >= s._target.x) {
            s._key["left"] = false;
            s.setScroll_w();
            return;
        } else if (s._showObject.x >= 0) {
            s._showObject.x = 0;
            s._key["left"] = false;
            s.setScroll_w();
            return;
        }
        if (s._key["Dkey"]) {
            s._speed = 5;
        }
        s._showObject.x += s._speed;
        s.setScroll_w();
        s.setSpeed();
    };
    LScrollbar.prototype.setScroll_h = function () {
        var s = this;
        var sy = (s._mask.getHeight() - s._scrollWidth * 2 - s._selectHeight) * s._showObject.y / (s._mask.getHeight() - s._showObject.getHeight());
        if (s._scroll_h_bar) {
            s._scroll_h_bar.x = s._mask.getWidth();
            s._scroll_h_bar.y = s._scrollWidth + sy;
        }
    };
    LScrollbar.prototype.setScroll_w = function () {
        var s = this;
        var sx = (s._mask.getWidth() - s._scrollWidth * 2 - s._selectHeight) * s._showObject.x / (s._mask.getWidth() - s._showObject.getWidth());
        if (s._scroll_w_bar) {
            s._scroll_w_bar.x = s._scrollWidth + sx;
            s._scroll_w_bar.y = s._mask.getHeight();
        }
    };
    LScrollbar.prototype.moveUp = function () {
        var s = this;
        if (!s._key["Dkey"] && s._showObject.y >= s._target.y) {
            s._key["up"] = false;
            s.setScroll_h();
            return;
        } else if (s._showObject.y >= 0) {
            s._showObject.y = 0;
            s._key["up"] = false;
            s.setScroll_h();
            return;
        }
        if (s._key["Dkey"]) {
            s._speed = 5;
        }
        s._showObject.y += s._speed;
        s.setScroll_h();
        s.setSpeed();
    };
    LScrollbar.prototype.moveDown = function () {
        var s = this;
        if (!s._key["Dkey"] && s._showObject.y <= s._target.y) {
            s._key["down"] = false;
            s.setScroll_h();
            return;
        } else if (s._showObject.y <= s._mask.getHeight() - s._showObject.getHeight()) {
            s._showObject.y = s._mask.getHeight() - s._showObject.getHeight();
            s._key["down"] = false;
            s.setScroll_h();
            return;
        }
        if (s._key["Dkey"]) {
            s._speed = 5;
        }
        s._showObject.y -= s._speed;
        s.setScroll_h();
        s.setSpeed();
    };
    LScrollbar.prototype.getScrollY = function () {
        return this._showObject.y;
    };
    LScrollbar.prototype.setScrollY = function (value) {
        var s = this;
        s._showObject.y = s._mask.getHeight() - s._showObject.getHeight();
        if (s._showObject.y < -value) {
            s._showObject.y = -value;
        } else if (value < 0) {
            s._showObject.y = 0;
        }
        this.setScroll_h();
    };
    LScrollbar.prototype.getScrollX = function () {
        return this._showObject.x;
    };
    LScrollbar.prototype.setScrollX = function (value) {
        this._showObject.x = value;
        this.setScroll_w();
    };
    LScrollbar.prototype.scrollToTop = function () {
        this._showObject.y = 0;
        this.setScroll_h();
    };
    LScrollbar.prototype.scrollToBottom = function () {
        var s = this, h1 = s._showObject.getHeight(), h2 = s._mask.getHeight();
        s._showObject.y = h1 > h2 ? h2 - h1 : 0;
        s.setScroll_h();
    };
    LScrollbar.prototype.scrollToLeft = function () {
        this._showObject.x = 0;
        this.setScroll_w();
    };
    LScrollbar.prototype.scrollToRight = function () {
        var s = this, w1 = s._showObject.getWidth(), w2 = s._mask.getWidth();
        s._showObject.x = w1 > w2 ? w2 - w1 : 0;
        s.setScroll_w();
    };
    LScrollbar.prototype.moveRight = function () {
        var s = this;
        if (!s._key["Dkey"] && s._showObject.x <= s._target.x) {
            s._key["right"] = false;
            s.setScroll_w();
            return;
        } else if (s._showObject.x <= s._mask.getWidth() - s._showObject.getWidth()) {
            s._showObject.x = s._mask.getWidth() - s._showObject.getWidth();
            s._key["right"] = false;
            s.setScroll_w();
            return;
        }
        if (s._key["Dkey"]) {
            s._speed = 5;
        }
        s._showObject.x -= s._speed;
        s.setScroll_w();
        s.setSpeed();
    };
    LScrollbar.prototype.mouseDown = function (event) {
        var s = event.clickTarget;
        if (s._scroll_h != null && event.selfX >= s._scroll_h.x && event.selfX <= s._scroll_h.x + s._scrollWidth) {
            s.mouseDownH(event, s);
        }
        if (s._scroll_w != null && event.selfY >= s._scroll_w.y && event.selfY <= s._scroll_w.y + s._scrollWidth) {
            s.mouseDownW(event, s);
        }
    };
    LScrollbar.prototype.mouseMoveH = function (event) {
        var s = event.clickTarget;
        if (event.selfY < s._scrollWidth || event.selfY > s._mask.getHeight()) {
            return;
        }
        var mx = event.selfY - s._key["scroll_y"];
        s._key["up"] = false;
        s._key["down"] = false;
        s._target.y = (s._mask.getHeight() - s._showObject.getHeight()) * (mx - s._scrollWidth) / (s._mask.getHeight() - s._scrollWidth * 3.5);
        if (s._target.y > s._showObject.y) {
            s._key["up"] = true;
        } else {
            s._key["down"] = true;
        }
        s._speed = Math.abs(s._target.y - s._showObject.y);
        s.setSpeed();
    };
    LScrollbar.prototype.mouseUpH = function (event) {
        var s = LGlobal.stage._ll_scrollbar;
        delete LGlobal.stage._ll_scrollbar;
        LGlobal.stage.removeEventListener(LMouseEvent.MOUSE_UP, s.mouseUpH);
        if (s._key["Dkey"]) {
            s._key["Dkey"] = false;
        } else {
            s.removeEventListener(LMouseEvent.MOUSE_MOVE, s.mouseMoveH);
            if (s._key["scroll_h"]) {
                s._key["scroll_h"] = false;
            }
        }
    };
    LScrollbar.prototype.mouseUpW = function (event) {
        var s = LGlobal.stage._ll_scrollbar;
        delete LGlobal.stage._ll_scrollbar;
        LGlobal.stage.removeEventListener(LMouseEvent.MOUSE_UP, s.mouseUpW);
        if (s._key["Dkey"]) {
            s._key["Dkey"] = false;
        } else {
            s.removeEventListener(LMouseEvent.MOUSE_MOVE, s.mouseMoveW);
            if (s._key["scroll_w"]) {
                s._key["scroll_w"] = false;
            }
        }
    };
    LScrollbar.prototype.mouseMoveW = function (event) {
        var s = event.clickTarget;
        if (event.selfX < s._scrollWidth || event.selfX > s._mask.getWidth()) {
            return;
        }
        var my = event.selfX - s._key["scroll_x"];
        s._key["left"] = false;
        s._key["right"] = false;
        s._target.x = (s._mask.getWidth() - s._showObject.getWidth()) * (my - s._scrollWidth) / (s._mask.getWidth() - s._scrollWidth * 3.5);
        if (s._target.x > s._showObject.x) {
            s._key["left"] = true;
        } else {
            s._key["right"] = true;
        }
        s._speed = Math.abs(s._target.x - s._showObject.x);
        s.setSpeed();
    };
    LScrollbar.prototype.setSpeed = function () {
        var s = this;
        s._speed = Math.floor(s._speed / 2);
        if (s._speed == 0) {
            s._speed = 1;
        }
    };
    LScrollbar.prototype.mouseDownW = function (event) {
        var s = event.clickTarget;
        if (event.selfX >= 0 && event.selfX <= s._scrollWidth) {
            if (s._showObject.x >= 0 || s._key["left"]) {
                return;
            }
            s._distance = 10;
            if (s._showObject.x + s._distance > 0) {
                s._distance = s._showObject.x;
            }
            s._target.x = s._showObject.x + s._distance;
            s._key["left"] = true;
            s._key["right"] = false;
            s._key["Dkey"] = true;
            s._speed = s._distance;
            s.setSpeed();
            if (!LGlobal.stage.hasEventListener(LMouseEvent.MOUSE_UP, s.mouseUpW)) {
                LGlobal.stage._ll_scrollbar = s;
                LGlobal.stage.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUpW);
            }
        } else if (event.selfX >= s._mask.getWidth() - s._scrollWidth && event.selfX <= s._mask.getWidth()) {
            if (s._showObject.x <= s._mask.getWidth() - s._showObject.getWidth() || s._key["left"]) {
                return;
            }
            s._distance = 10;
            if (s._showObject.x - s._distance < s._mask.getWidth() - s._showObject.getWidth()) {
                s._distance = s._showObject.x - s._mask.getWidth() + s._showObject.getWidth();
            }
            s._target.x = s._showObject.x - s._distance;
            s._key["right"] = true;
            s._key["left"] = false;
            s._key["Dkey"] = true;
            s._speed = this._distance;
            s.setSpeed();
            if (!LGlobal.stage.hasEventListener(LMouseEvent.MOUSE_UP, s.mouseUpW)) {
                LGlobal.stage._ll_scrollbar = s;
                LGlobal.stage.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUpW);
            }
        } else if (event.selfX >= s._scroll_w_bar.x && event.selfX <= s._scroll_w_bar.x + s._scroll_w_bar.getWidth() && !s._key["scroll_w"]) {
            s._key["scroll_w"] = true;
            s._key["scroll_x"] = event.selfX - s._scroll_w_bar.x;
            s._key["mouseX"] = event.selfX;
            s.addEventListener(LMouseEvent.MOUSE_MOVE, s.mouseMoveW);
            if (!LGlobal.stage.hasEventListener(LMouseEvent.MOUSE_UP, s.mouseUpW)) {
                LGlobal.stage._ll_scrollbar = s;
                LGlobal.stage.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUpW);
            }
        } else if (event.selfX > 0 && event.selfX < s._mask.getWidth()) {
            s._key["left"] = false;
            s._key["right"] = false;
            s._target.x = (s._mask.getWidth() - s._showObject.getWidth()) * (event.selfX - s._scrollWidth) / (s._mask.getWidth() - s._scrollWidth * 3.5);
            if (s._target.x > s._showObject.x) {
                s._key["left"] = true;
            } else {
                s._key["right"] = true;
            }
            s._speed = Math.abs(s._target.x - s._showObject.x);
            s.setSpeed();
        }
    };
    LScrollbar.prototype.mouseDownH = function (event) {
        var s = event.clickTarget;
        if (event.selfY >= 0 && event.selfY <= s._scrollWidth) {
            if (s._showObject.y >= 0) {
                return;
            }
            s._distance = 10;
            if (s._showObject.y + s._distance > 0) {
                s._distance = s._showObject.y;
            }
            s._target.y = s._showObject.y + s._distance;
            s._key["up"] = true;
            s._key["down"] = false;
            s._key["Dkey"] = true;
            s._speed = s._distance;
            s.setSpeed();
            if (!LGlobal.stage.hasEventListener(LMouseEvent.MOUSE_UP, s.mouseUpH)) {
                LGlobal.stage._ll_scrollbar = s;
                LGlobal.stage.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUpH);
            }
        } else if (event.selfY >= s._mask.getHeight() - s._scrollWidth && event.selfY <= s._mask.getHeight()) {
            if (s._showObject.y <= s._mask.getHeight() - s._showObject.getHeight()) {
                return;
            }
            s._distance = 10;
            if (s._showObject.y - s._distance < s._mask.getHeight() - s._showObject.getHeight()) {
                s._distance = s._showObject.y - s._mask.getHeight() + s._showObject.getHeight();
            }
            s._target.y = s._showObject.y - s._distance;
            s._key["down"] = true;
            s._key["up"] = false;
            s._key["Dkey"] = true;
            s._speed = s._distance;
            s.setSpeed();
            if (!LGlobal.stage.hasEventListener(LMouseEvent.MOUSE_UP, s.mouseUpH)) {
                LGlobal.stage._ll_scrollbar = s;
                LGlobal.stage.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUpH);
            }
        } else if (event.selfY >= s._scroll_h_bar.y && event.selfY <= s._scroll_h_bar.y + s._scroll_h_bar.getHeight() && !s._key["scroll_h"]) {
            s._key["scroll_h"] = true;
            s._key["scroll_y"] = event.selfY - s._scroll_h_bar.y;
            s._key["mouseY"] = event.selfY;
            s.addEventListener(LMouseEvent.MOUSE_MOVE, s.mouseMoveH);
            if (!LGlobal.stage.hasEventListener(LMouseEvent.MOUSE_UP, s.mouseUpH)) {
                LGlobal.stage._ll_scrollbar = s;
                LGlobal.stage.addEventListener(LMouseEvent.MOUSE_UP, s.mouseUpH);
            }
        } else if (event.selfY > 0 && event.selfY < s._mask.getHeight()) {
            s._key["up"] = false;
            s._key["down"] = false;
            s._target.y = (s._mask.getHeight() - s._showObject.getHeight()) * (event.selfY - s._scrollWidth) / (s._mask.getHeight() - s._scrollWidth * 3.5);
            if (s._target.y > s._showObject.y) {
                s._key["up"] = true;
            } else {
                s._key["down"] = true;
            }
            s._speed = Math.abs(s._target.y - s._showObject.y);
            s.setSpeed();
        }
    };
    return LScrollbar;
})();
var LWindow = (function () {
    function LWindow(width, height, title) {
        var s = this;
        LExtends(s, LSprite, []);
        s.type = "LWindow";
        s.w = width;
        s.h = height;
        s.bar = new LSprite();
        s.bar.alpha = 0.7;
        s.barColor = "#0000FF";
        s.bar.w = s.w;
        s.bar.h = 30;
        s.addChild(s.bar);
        s.bar.addEventListener(LMouseEvent.MOUSE_DOWN, s._onBarDown);
        s.title = new LTextField();
        s.title.x = s.title.y = 3;
        s.title.size = 16;
        s.title.text = title ? title : "";
        s.bar.addChild(s.title);
        s.close = new LSprite();
        s.closeColor = "#800000";
        s.close.w = 50;
        s.close.h = 25;
        s.addChild(s.close);
        s.close.addEventListener(LMouseEvent.MOUSE_UP, s._onClose);
        s.sign = new LSprite();
        s.signColor = "#FFFFFF";
        s.addChild(s.sign);
        s.layer = new LSprite();
        s.addChild(s.layer);
        s.layerColor = "#FFFFFF";
        s.layer.y = s.bar.h;
        s.layer.h = s.h - s.bar.h;
        var g = new LGraphics();
        g.rect(0, 0, s.w, s.layer.h);
        s.layer.mask = g;
        s.graphics.drawRect(1, s.barColor, [0, s.bar.h, s.w, s.layer.h], true, s.layerColor);
        s.addEventListener(LMouseEvent.MOUSE_UP, function (e) {
        });
        s.addEventListener(LMouseEvent.MOUSE_DOWN, function (e) {
        });
        s.addEventListener(LMouseEvent.MOUSE_MOVE, function (e) {
        });
        s.addEventListener(LMouseEvent.MOUSE_OVER, function (e) {
        });
        s.addEventListener(LMouseEvent.MOUSE_OUT, function (e) {
        });
        s.addEventListener(LEvent.ENTER_FRAME, s._onDraw);
    }

    LWindow.CLOSE = "close";
    LWindow.prototype.clone = function () {
        var s = this, a = new LWindow(s.w, s.h);
        a.copyProperty(s);
        a.removeChild(a.bar);
        a.bar = s.bar.clone();
        a.addChild(a.bar);
        a.removeChild(a.close);
        a.close = s.close.clone();
        a.addChild(a.close);
        a.removeChild(a.sign);
        a.sign = s.sign.clone();
        a.addChild(a.sign);
        a.removeChild(a.layer);
        a.layer = s.layer.clone();
        a.addChild(a.layer);
        a.bar.addEventListener(LMouseEvent.MOUSE_DOWN, a._onBarDown);
        a.close.addEventListener(LMouseEvent.MOUSE_UP, a._onClose);
        return a;
    };
    LWindow.prototype._onClose = function (event) {
        var s = event.clickTarget.parent;
        s.dispatchEvent(LWindow.CLOSE);
        s.parent.removeChild(s);
    };
    LWindow.prototype._onDraw = function (event) {
        var s = event.target;
        var co = s.getRootCoordinate();
        if (s.barColorSet == s.barColor) {
            return;
        }
        s.barColorSet = s.barColor;
        s.xSet = co.x;
        s.ySet = co.y;
        var barGrd = LGlobal.canvas.createLinearGradient(0, -s.bar.h * 0.5, 0, s.bar.h * 2);
        barGrd.addColorStop(0, "#FFFFFF");
        barGrd.addColorStop(1, s.barColor);
        var closeGrd = LGlobal.canvas.createLinearGradient(0, -s.close.h * 0.5, 0, s.close.h * 2);
        closeGrd.addColorStop(0, "#FFFFFF");
        closeGrd.addColorStop(1, s.closeColor);
        s.bar.graphics.clear();
        s.bar.graphics.drawRoundRect(1, s.barColor, [0, 0, s.bar.w, s.bar.h, s.bar.h * 0.1], true, barGrd);
        s.close.graphics.clear();
        s.close.graphics.drawRoundRect(1, s.closeColor, [s.w - s.close.w, 0, s.close.w, s.close.h, s.close.h * 0.1], true, closeGrd);
        s.sign.graphics.clear();
        s.sign.graphics.drawLine(4, s.signColor, [s.w - s.close.w + 15, 5, s.w - 15, s.close.h - 5]);
        s.sign.graphics.drawLine(4, s.signColor, [s.w - s.close.w + 15, s.close.h - 5, s.w - 15, 5]);
    };
    LWindow.prototype._onBarDown = function (event) {
        var s = event.clickTarget.parent;
        s.bar.addEventListener(LMouseEvent.MOUSE_UP, s._onBarUp);
        s.startDrag();
    };
    LWindow.prototype._onBarUp = function (event) {
        var s = event.clickTarget.parent;
        s.stopDrag();
        s.bar.removeEventListener(LMouseEvent.MOUSE_UP, s._onBarUp);
    };
    return LWindow;
})();

function LTable(row, col, style) {
    var s = this;
    base(s, LSprite, []);
    s.type = "LTable";
    s.row = row || 0;
    s.col = col || 0;
    if (!style) style = {};
    if (!style.cellWidth) style.cellWidth = 100;
    if (!style.cellHeight) style.cellHeight = 30;
    if (!style.borderWidth) style.borderWidth = 1;
    if (!style.borderColor) style.borderColor = "black";
    if (!style.backgroundColor) style.backgroundColor = "white";
    if (!style.selectColor) style.selectColor = "#E0E0E0";
    if (!style.indentX) style.indentX = 10;
    if (!style.indentY) style.indentY = 10;
    s.style = style;
    s._tableSizeData = new Array();
    s._createTableData();
    s._isChange = true;
    s._createOriginalTable();
    s.addEventListener(LEvent.ENTER_FRAME, s._onDraw);
}

LTable.prototype.addRow = function () {
    var s = this;
    var t = s._tableSizeData;
    var st = s.style;
    var rowItem = new Array();
    var rowLayer = new LSprite();
    rowLayer.y = s.getHeight();
    s.addChild(rowLayer);
    var toX = 0;
    var w = 0, h = 0;
    for (var i = 0; i < s.col; i++) {
        w = t[s.row - 1][i].width, h = st.cellHeight;
        var upLayer = new LSprite();
        upLayer.graphics.drawRect(st.borderWidth, st.borderColor, [0, 0, w, h], true, st.backgroundColor);
        var overLayer = new LSprite();
        overLayer.graphics.drawRect(st.borderWidth, st.borderColor, [0, 0, w, h], true, st.selectColor);
        var colLayer = new LButton(upLayer, overLayer);
        colLayer.setCursorEnabled(false);
        colLayer.staticMode = true;
        colLayer.x = toX;
        rowLayer.addChild(colLayer);
        colLayer.child = new LSprite();
        colLayer.addChild(colLayer.child);
        var colItem = {width: w, height: h,};
        rowItem.push(colItem);
        toX += w;
    }
    t.push(rowItem);
    s.row++;
};
LTable.prototype.addCol = function () {
    var s = this;
    var t = s._tableSizeData;
    var st = s.style;
    var w = 0, h = 0;
    for (var i = 0; i < s.row; i++) {
        var rowLayer = s.getChildAt(i);
        w = st.cellWidth, h = t[i][s.col - 1].height;
        var upLayer = new LSprite();
        upLayer.graphics.drawRect(st.borderWidth, st.borderColor, [0, 0, w, h], true, st.backgroundColor);
        var overLayer = new LSprite();
        overLayer.graphics.drawRect(st.borderWidth, st.borderColor, [0, 0, w, h], true, st.selectColor);
        var colLayer = new LButton(upLayer, overLayer);
        colLayer.setCursorEnabled(false);
        colLayer.staticMode = true;
        colLayer.x = rowLayer.getWidth();
        rowLayer.addChild(colLayer);
        colLayer.child = new LSprite();
        colLayer.addChild(colLayer.child);
        var colItem = {width: w, height: h,};
        t[i].push(colItem);
    }
    s.col++;
};
LTable.prototype.setCell = function (child, row, col) {
    var s = this;
    if (!child || !s.childList[row] || !s.childList[row].childList[col]) return -1;
    s.childList[row].childList[col].child.addChild(child);
    var t = s._tableSizeData;
    if (child.getWidth() >= t[row][col].width) {
        for (var i = 0, l = t.length; i < l; i++) {
            t[i][col].width = child.getWidth() + s.style.indentX * 2;
        }
    }
    if (child.getHeight() >= t[row][col].height) {
        for (var i = 0, l = t[row].length; i < l; i++) {
            t[row][i].height = child.getHeight() + s.style.indentY * 2;
        }
    }
};
LTable.prototype._onDraw = function (e) {
    var s = e.target;
    if (!s.childList.length > 0) return;
    var st = s.style;
    var t = s._tableSizeData;
    var toY = 0;
    for (var i = 0; i < s.row; i++) {
        var w = 0, h = 0;
        var rowLayer = s.getChildAt(i);
        rowLayer.y = toY;
        if (rowLayer.childList.length > 0) {
            var toX = 0;
            for (var j = 0; j < s.col; j++) {
                w = t[i][j].width, h = t[i][j].height;
                var colLayer = rowLayer.getChildAt(j);
                if (w != colLayer.getWidth() || h != colLayer.getHeight()) {
                    colLayer.bitmap_up.graphics.drawRect(st.borderWidth, st.borderColor, [0, 0, w, h], true, st.backgroundColor);
                    colLayer.bitmap_over.graphics.drawRect(st.borderWidth, st.borderColor, [0, 0, w, h], true, st.selectColor);
                }
                colLayer.x = toX;
                var child = colLayer.child;
                if (child) {
                    if (child.getWidth() >= w) {
                        for (var k = 0, l = t.length; k < l; k++) {
                            t[k][j].width = child.getWidth() + s.style.indentX * 2;
                        }
                    }
                    if (child.getHeight() >= h) {
                        for (var k = 0, l = t[row].length; k < l; k++) {
                            t[i][k].height = child.getHeight() + s.style.indentY * 2;
                        }
                    }
                    w = t[i][j].width, h = t[i][j].height;
                    child.x = (w - child.getWidth()) * 0.5;
                    child.y = (h - child.getHeight()) * 0.5;
                }
                toX += w;
            }
        }
        toY += h;
    }
};
LTable.prototype._createOriginalTable = function () {
    var s = this;
    var st = s.style;
    var t = s._tableSizeData;
    var toY = 0;
    for (var i = 0; i < s.row; i++) {
        var w = 0, h = 0;
        var rowLayer = new LSprite();
        rowLayer.y = toY;
        s.addChild(rowLayer);
        var toX = 0;
        for (var j = 0; j < s.col; j++) {
            w = t[i][j].width, h = t[i][j].height;
            var upLayer = new LSprite();
            upLayer.graphics.drawRect(st.borderWidth, st.borderColor, [0, 0, w, h], true, st.backgroundColor);
            var overLayer = new LSprite();
            overLayer.graphics.drawRect(st.borderWidth, st.borderColor, [0, 0, w, h], true, st.selectColor);
            var colLayer = new LButton(upLayer, overLayer);
            colLayer.setCursorEnabled(false);
            colLayer.staticMode = true;
            colLayer.x = toX;
            rowLayer.addChild(colLayer);
            colLayer.child = new LSprite();
            colLayer.addChild(colLayer.child);
            toX += w;
        }
        toY += h;
    }
};
LTable.prototype._createTableData = function () {
    var s = this;
    for (var i = 0; i < s.row; i++) {
        var rowItem = new Array();
        for (var j = 0; j < s.col; j++) {
            var colItem = {width: s.style.cellWidth, height: s.style.cellHeight,};
            rowItem.push(colItem);
        }
        s._tableSizeData.push(rowItem);
    }
};

function LTreeWidget(list, style) {
    var s = this;
    base(s, LSprite, []);
    s.list = list;
    if (!style) {
        style = {};
    }
    if (!style.textColor) {
        style.textColor = "black";
    }
    if (!style.textSize) {
        style.textSize = 11;
    }
    if (!style.textFont) {
        style.textFont = "Arial";
    }
    if (!style.textWeight) {
        style.textWeight = "normal";
    }
    if (!style.branchIndent) {
        style.branchIndent = 10;
    }
    if (!style.branchButtonColor) {
        style.branchButtonColor = "black";
    }
    s.style = style;
    s._branchBtnSize = style.textSize - 1;
    s._createBranch(s, s, 0, s.list);
};LTreeWidget.BRANCH_OPEN = "branch_open";
LTreeWidget.BRANCH_CLOSE = "branch_close";
LTreeWidget.prototype._createBranch = function (layer, parentBranch, deep, list) {
    var s = this;
    var toY = 0;
    for (var i = 0, l = list.length; i < l; i++) {
        var item = list[i];
        var branchLayer = new LSprite();
        branchLayer.parentBranch = parentBranch;
        branchLayer.y = toY;
        layer.addChild(branchLayer);
        var textLayer = new LSprite();
        textLayer.x = s._branchBtnSize + 5;
        branchLayer.addChild(textLayer);
        if (item.click) {
            textLayer.addEventListener(LMouseEvent.MOUSE_UP, item.click);
        }
        var textObj = new LTextField();
        textObj.text = item.label;
        textObj.color = s.style.textColor;
        textObj.size = s.style.textSize;
        textObj.weight = s.style.textWeight;
        textObj.font = s.style.textFont;
        textLayer.addChild(textObj);
        if (item.branch && item.branch.length > 0) {
            branchLayer.branch = new LSprite();
            branchLayer.branch.x = 30;
            branchLayer.branch.y = branchLayer.getHeight() + s.style.branchIndent;
            branchLayer.branch.visible = false;
            branchLayer.addChild(branchLayer.branch);
            var branchBtn = new LSprite();
            branchBtn.root = s;
            branchBtn.status = LTreeWidget.BRANCH_CLOSE;
            branchBtn.y = (textLayer.getHeight() - s._branchBtnSize) / 2;
            branchBtn.graphics.drawRect(0, "", [0, 0, s._branchBtnSize, s._branchBtnSize]);
            branchBtn.graphics.drawVertices(0, "", [[0, 0], [s._branchBtnSize, s._branchBtnSize / 2], [0, s._branchBtnSize]], true, s.style.branchButtonColor);
            branchLayer.addChild(branchBtn);
            branchBtn.addEventListener(LMouseEvent.MOUSE_UP, s._openOrCloseBranch);
            s._createBranch(branchLayer.branch, branchLayer, deep + 1, item.branch);
        }
        toY += branchLayer.getHeight() + s.style.branchIndent;
    }
};
LTreeWidget.prototype._openOrCloseBranch = function (event) {
    var branchBtn = event.currentTarget;
    var s = branchBtn.root;
    var branchLayer = branchBtn.parent;
    var p = branchLayer.parent;
    var currentBranchIndex = p.getChildIndex(branchLayer);
    if (branchBtn.status == LTreeWidget.BRANCH_CLOSE) {
        branchLayer.branch.visible = true;
        branchBtn.graphics.clear();
        branchBtn.graphics.drawRect(0, "", [0, 0, s._branchBtnSize, s._branchBtnSize]);
        branchBtn.graphics.drawVertices(0, "", [[0, 0], [s._branchBtnSize, 0], [s._branchBtnSize / 2, s._branchBtnSize]], true, s.style.branchButtonColor);
        branchBtn.status = LTreeWidget.BRANCH_OPEN;
    } else {
        branchLayer.branch.visible = false;
        branchBtn.graphics.clear();
        branchBtn.graphics.drawRect(0, "", [0, 0, s._branchBtnSize, s._branchBtnSize]);
        branchBtn.graphics.drawVertices(0, "", [[0, 0], [s._branchBtnSize, s._branchBtnSize / 2], [0, s._branchBtnSize]], true, s.style.branchButtonColor);
        branchBtn.status = LTreeWidget.BRANCH_CLOSE;
    }
    while (p.objectIndex != s.parent.objectIndex) {
        var toY = branchLayer.y;
        for (var i = currentBranchIndex; i < p.childList.length; i++) {
            var currentBranch = p.childList[i];
            currentBranch.y = toY;
            toY += currentBranch.getHeight() + s.style.branchIndent;
        }
        branchLayer = branchLayer.parentBranch;
        p = branchLayer.parent;
        currentBranchIndex = p.getChildIndex(branchLayer);
    }
};