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
import { type FormEvent, type ReactElement, useCallback, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UITarget } from '@/targets/ui-target';

export default function Signup(): ReactElement {
    const { t } = useTranslation('footer');
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(
        (e: FormEvent) => {
            e.preventDefault();
            setError(null);
            if (inputRef.current?.value?.trim()) {
                const email = inputRef.current.value;
                // Basic email validation
                if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                    setError(t('newsletter.invalidEmail'));
                    return;
                }
                // oxlint-disable-next-line no-alert
                alert(`Signup email address: ${email}`);
            } else {
                setError(t('newsletter.emailRequired'));
            }
        },
        [inputRef, t]
    );

    return (
        <UITarget targetId="sfcc.emailSignUp.consent.marketing">
            <form
                onSubmit={handleSubmit}
                noValidate
                className="w-full space-y-2 [--ui-radius:var(--market-radius-control)]"
            >
                <label
                    htmlFor="footer-newsletter-email"
                    className="block text-[0.8125rem] font-medium text-muted-foreground"
                >
                    {t('newsletter.emailLabel')}
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <Input
                        ref={inputRef}
                        id="footer-newsletter-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder={t('newsletter.emailPlaceholder')}
                        className="h-13 w-full min-w-0 bg-card dark:bg-card px-3.5 text-base font-normal text-foreground placeholder:text-muted-foreground sm:flex-1 md:text-base [--input:var(--newsletter-input-border)]"
                        aria-describedby={error ? 'footer-newsletter-error' : undefined}
                        aria-invalid={!!error}
                        onChange={() => {
                            if (error) {
                                setError(null);
                            }
                        }}
                    />
                    <UITarget targetId="sfcc.emailSignUp.consent.tos" />
                    <Button
                        type="submit"
                        variant="default"
                        size="lg"
                        className="h-13 w-full px-[1.625rem] text-[0.9375rem] font-semibold sm:w-auto"
                    >
                        {t('newsletter.subscribeButton')}
                    </Button>
                </div>
                <div
                    id="footer-newsletter-error"
                    aria-live="polite"
                    aria-atomic="true"
                    className="min-h-5 text-sm leading-5 text-destructive"
                >
                    {error}
                </div>
            </form>
        </UITarget>
    );
}
