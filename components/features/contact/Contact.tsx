import { Grid } from '@/components/custom/Grid'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { CustomCard } from '@/components/custom/CustomCard'
export const Contact = () => {
  return (

    <CustomCard className="max-w-[850px] w-[850px]">
      <Grid container spacing={{ xs: 3 }} >
        <Grid item span={{ xs: 12, md: 6 }}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </Grid>
        <Grid item span={{ xs: 12, md: 6 }}>
          <Label htmlFor="name">Nombre</Label>
          <Input type="text" id="name" placeholder="Nombre..." className='w-full' />
        </Grid>
        <Grid item span={{ xs: 12 }}>
          <Label htmlFor="asunto">Asunto</Label>
          <Input type="text" id="asunto" placeholder="Asunto..." />
        </Grid>
        <Grid item span={{ xs: 12 }}>
          <Label htmlFor="message">Mensaje</Label>
          <Textarea placeholder="Type your message here." rows={5} />
        </Grid>
        <Grid item span={{ xs: 12 }}>
          <Button>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </CustomCard>




  )
}

