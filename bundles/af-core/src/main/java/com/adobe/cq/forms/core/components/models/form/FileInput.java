/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2022 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
package com.adobe.cq.forms.core.components.models.form;

import org.osgi.annotation.versioning.ConsumerType;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Defines the form {@code FileInput} Sling Model used for the {@code /apps/core/fd/components/form/fileinput/v1/fileinput} component.
 *
 * @since com.adobe.cq.forms.core.components.models.form 2.0.0
 */
@ConsumerType
public interface FileInput extends Field, FileConstraint, ContainerConstraint {
    String DEFAULT_BUTTON_TEXT = "Attach";

    /**
     * Returns {@code true} if multiple files can be selected, {@code false} otherwise
     *
     * @return {@code true} if multiple files can be selected, {@code false} otherwise
     */
    @JsonIgnore
    default Boolean isMultiple() {
        return false;
    }

    /**
     * Returns the text to be displayed on the file input button
     *
     * @return text to be displayed on the file input buttone
     */
    @JsonIgnore
    default String getButtonText() {
        return DEFAULT_BUTTON_TEXT;
    }
}
