import { Box } from '@/components/custom/Box';
import { Grid } from '@/components/custom/Grid'
import { Badge } from '@/components/ui/badge';

import Image from 'next/image';
import React from 'react'
export const images = [
  '/img/projects/tienda-obis.png',
  '/img/projects/pokeapi.jpg',
  '/img/projects/red_social.jpg',
  '/img/projects/rickmorty.jpg',
  '/img/projects/calc.jpg',
  '/img/projects/task-todo.jpg',
  '/img/projects/game01.jpg',
];
export const Projects = () => {
  return (
    <div>

      <Grid container spacing={{ xs: 3 }} cols={{ xs: 12 }}>
        {images.map((image, index) => (
          <Grid
            item

            key={index}
            span={{ xs: 6, lg: 4, xl: 3 }}
            className='border rounded-xl overflow-hidden'
          >
            <Box className={"relative overflow-hidden"} style={{ aspectRatio: "2/1.3" }}>
              <Image
                src={image}
                alt='image'
                fill
                className='rounded-xl object-cover object-center'
              />
            </Box>
            <Box className='mt-3 p-2'>
              <h4 className='font-semibold text-secondary-foreground'>Tienda Obis</h4>
              <span className='text-sm text-muted-foreground '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat impedit quam elige</span>
              <Box className='flex flex-wrap gap-2 mt-2'>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Nextjs</Badge>
                <Badge variant="secondary">Taiwind</Badge>
                <Badge variant="secondary">Shadcn</Badge>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

