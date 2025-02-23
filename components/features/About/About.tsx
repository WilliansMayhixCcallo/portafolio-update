import { Grid } from '@/components/custom/Grid'
import React from 'react'

import { Title } from '@/components/custom/Title'
import { Box } from '@/components/custom/Box'
import { GithubIcon, LinkedinIcon, TwitterIcon, MailIcon, MapPinIcon } from "lucide-react"
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ProfileAbout } from './ProfileAbout'
export const About = () => {
  return (
    <Box className='py-5'>

      <Grid container className='flex-col items-center' spacing={{ xs: 5 }}>
        <Grid item span={{ xs: 12, md: 5 }} className='flex flex-col items-center'>
          <ProfileAbout />
          <Title title='Willians Mayhix Ccallo' />
          <span className='bg-primary p-2 text-center rounded-lg text-black font-semibold text-sm w-fit'>Desarrollador</span>

          <Box className="flex flex-col gap-4 w-auto text-sm mt-5">
            <Badge variant="secondary" className='w-fit' >
              <MapPinIcon className="w-4 h-4 mr-2 text-muted-foreground" />
              <span>Arequipa, Perú</span>
            </Badge>
            <Badge variant="secondary" className='w-fit'
            >
              <MailIcon className="w-4 h-4 mr-2 text-muted-foreground" />
              willians.mayhix.ccallo@gmail.com
            </Badge>

          </Box>
          <div className="flex space-x-2 mt-4">
            <Button variant="outline" size="icon" aria-label="Perfil de GitHub">
              <GithubIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Perfil de LinkedIn">
              <LinkedinIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" aria-label="Perfil de Twitter">
              <TwitterIcon className="h-4 w-4" />
            </Button>
          </div>
        </Grid>
        <Grid item span={{ xs: 12, md: 7 }} className='px-5'>

          <Title title='Acerca de mi' />

          <p>

            Soy una persona proactiva,responsable,y con buen desarrollo interpersonal,apasionado al programacion.Busco oportunidad de un puesto de trabajo donde pueda profundizar y mejorar mis conocimientos ,y logre adquirir experiencia donde consiga apreder a resolver problemas de nuevos desafios y sea capaz mejorar mi habilidades
          </p>
          <h5 className='mt-5 font-semibold text-lg'>Habilidades</h5>
          <Box className='flex  mt-3 gap-5'>

            <Box>
              <h5 className=" mb-2 font-semibold">Frontend</h5>
              <Box className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Vue.js</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Tailwind CSS</Badge>
              </Box>
            </Box>

            <Box>
              <Box>
                <h5 className=" mb-2 font-semibold">Frontend</h5>
                <Box className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Vue.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </Box>
              </Box>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

