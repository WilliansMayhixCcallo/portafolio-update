import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  footerChildren?: React.ReactNode;

}
export const CustomCard = ({ children, title, description, className, footerChildren }: Props) => {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <CardTitle>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent >
        {children}
      </CardContent>
      <CardFooter>
        {footerChildren}
      </CardFooter>
    </Card>

  )
}

