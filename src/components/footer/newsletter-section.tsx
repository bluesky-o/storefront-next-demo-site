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
import { type ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import Signup from './signup';

export default function NewsletterSection(): ReactElement {
    const { t } = useTranslation('footer');

    return (
        <div className="section-container mb-12 lg:mb-24">
            <section
                className="grid grid-cols-1 xl:grid-cols-2 items-center gap-8 rounded-ui bg-newsletter-background p-6 sm:p-8 xl:p-12 text-newsletter-foreground [--ui-radius:var(--market-radius-panel)]"
                aria-labelledby="footer-newsletter-heading"
            >
                <div className="min-w-0 space-y-2.5">
                    <h2
                        id="footer-newsletter-heading"
                        className="font-serif text-[2rem] font-normal leading-none tracking-[-0.03em] sm:text-4xl xl:text-[2.75rem]"
                    >
                        <Trans
                            t={t}
                            i18nKey="newsletter.title"
                            components={{
                                accent: (
                                    <span className="italic text-accent-foreground" />
                                )
                            }}
                        />
                    </h2>
                    <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                        {t('newsletter.description')}
                    </p>
                </div>

                <div className="min-w-0">
                    <Signup />
                </div>
            </section>
        </div>
    );
}
