'use client'
import Container from '../shared-components/Container'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import Image from 'next/image'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { newsLetterSchema } from '@/lib/form-schema'
import { useTranslations } from 'next-intl'
export default function SignUp() {
  const t = useTranslations('Newsletter')
  const form = useForm<z.infer<typeof newsLetterSchema>>({
    resolver: zodResolver(newsLetterSchema),
    defaultValues: {
      name: '',
      email: '',
      option: '',
    },
  })

  return (
    <Container
      id="sign-up"
      variant="rounded-primary"
      innerClassName="p-0 md:p-0 grid grid-cols-1  lg:grid-cols-[2fr_1fr] gap-4 border-2 items-center bg-white"
    >
      <div className="flex flex-col  justify-center gap-2 py-10 px-10 text-[#2d234b]">
        <h1 className="font-medium capitalize text-2xl sm:text-3xl lg:text-4xl leading-6 mb-4">
          {t('title')}
        </h1>
        <p>{t('subTitle')}</p>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit((values) => {
              console.log(values)
            })}
            className="grid grid-cols-1 gap-4 items-end sm:grid-cols-2"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('name')}</FormLabel>
                  <FormControl>
                    <Input type="text" placeholder={t('namePlaceholder')} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('email')}</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder={t('emailPlaceholder')} {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="option"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t('option')}</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="text-secondary font-medium">
                      <SelectTrigger className="">
                        <SelectValue placeholder={t('optionPlaceholder')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={'Friends and family'}>
                        {t('options.Friends and family')}
                      </SelectItem>
                      <SelectItem value={'Youtube'}>{t('options.Youtube')}</SelectItem>
                      <SelectItem value={'Social media'}>{t('options.Social media')}</SelectItem>
                      <SelectItem value={'One of our programs or events'}>
                        {t('options.One of our programs or events')}
                      </SelectItem>
                      <SelectItem value={'Other'}>{t('options.Other')}</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-[#2d234b] hover:bg-[#2d234b]/90">
              {t('submit')}
            </Button>
          </form>
        </Form>
      </div>

      <div className="relative inset-0 w-full h-full bg-shade opacity-60 ">
        <Image
          src="/img/gallery/activities.jpg"
          alt="activities"
          width={500}
          height={500}
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover brightness-110"
        />
      </div>
    </Container>
  )
}
