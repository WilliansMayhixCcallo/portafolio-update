import { Box } from "@/components/custom/Box";
import { Grid } from "@/components/custom/Grid";
import { Title } from "@/components/custom/Title";
import { About, Contact, Projects, Skill } from "@/components/features";
import { ImageProfile, PresentationProfile } from "@/components/features/Section";

export default function HomePage() {

  return (

    <Box className="">
      <Grid container span={{ xs: 12 }} spacing={{ xs: 2, md: 10 }}
        className="border py-2 md:py-20 lg:py-24 xl:py-32  flex flex-col items-center justify-center"

      >
        <Grid item span={{ xs: 12, lg: 6 }} className="flex justify-center lg:justify-end " >
          <ImageProfile />
        </Grid>
        <Grid item span={{ xs: 12, lg: 6 }} className="flex justify-center lg:justify-start ">
          <PresentationProfile />
        </Grid>

      </Grid>
      <Grid item span={{ xs: 12 }} className=" px-3  sm:px-5 lg:px-48 xl:px-72 mt-10">
        <Title title="Habilidades" subtitle="Tecnologias " />
        <Skill />
      </Grid>
      <Grid item span={{ xs: 12 }} className=" px-3  sm:px-5 lg:px-48 xl:px-72 mt-10">
        <Title title="Projectos" subtitle="Tecnologias " />
        <Projects />
      </Grid>
      <Grid item span={{ xs: 12 }} className=" px-3  sm:px-5 lg:px-48 xl:px-72 mt-10">
        <Title title="Acerca de" subtitle="Tecnologias " />
        <About />
      </Grid>
      <Grid item span={{ xs: 12 }} className=" px-3  sm:px-5 lg:px-48 xl:px-72 mt-10 mb-10 ">
        <Title title="Contacto" subtitle="Puedes enviarme un mensaje a mi correo electrónico " />
        <Box className="w-full flex ">
          <Contact />
        </Box>
      </Grid>
    </Box>



  )

}
