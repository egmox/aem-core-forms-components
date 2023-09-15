/*******************************************************************************
 * Copyright 2023 Adobe
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/
(function($) {
  "use strict";

  var EDIT_DIALOG = ".cmp-adaptiveform-switch__editdialog",
      ENABLE_UNCHECKED_VALUE = EDIT_DIALOG + " .cmp-adaptiveform-switch__enable-unchecked-value",
      ENUM_OPTION = ".cmp-adaptiveform-switch__enums coral-multifield-item",
      Utils = window.CQ.FormsCoreComponents.Utils.v1;

  function _handleLayout(dialog) {
    var switchWrapper =  dialog.find(ENABLE_UNCHECKED_VALUE)[0];
    $(switchWrapper).css({"display":"flex", "margin-bottom":"1px"});
    var label = $(switchWrapper).find('label[class="coral-Form-fieldlabel"]')[0];
    $(label).css('padding-right', '20px');
    var switchBtn = dialog.find('coral-switch[name="./enableUncheckedValue"]')[0];
    $(switchBtn).css({"width":"40px"});
  }

  /**
   * The off value of a checkbox is optional, if not defined then no value will be submitted when the checkbox is not selected.
   * To explicitly send the off value, user needs to switch the 'enableUncheckedValue' on.
   * @param dialog
   */
  function _handleOffFieldVisibility(dialog) {
    var enableOffValueSwitch = $('coral-switch[name="./enableUncheckedValue"]')[0];
    var isChecked = enableOffValueSwitch.hasAttribute('checked');
    var offField = $($(ENUM_OPTION)[0]);

    offField.css({"display": isChecked ? "block" : "none"})
    enableOffValueSwitch.addEventListener("click", function() {
      isChecked = !isChecked;
      offField.css({"display": isChecked ? "block" : "none"})
    })
  }

  Utils.initializeEditDialog(EDIT_DIALOG)(_handleLayout, _handleOffFieldVisibility);

})(jQuery);
