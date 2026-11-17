/**
 * Copyright 2026 Salesforce, Inc.
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
 */

import { useTranslation } from 'react-i18next';

export default function AnnouncementBar() {
    const { t } = useTranslation('common');
    return (
        <div className="bg-dark-bg text-on-dark-text text-xs sm:text-sm">
            <div className="section-container flex items-center justify-center gap-6 py-2.5 text-center">
                <div>
                    {t('globalAnnouncement.title')}
                    <span className="hidden md:inline">{t('globalAnnouncement.desktopLabel')}</span>
                </div>
            </div>
        </div>
    );
}
