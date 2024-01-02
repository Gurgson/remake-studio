import { Metadata } from 'next';
import { notFound } from 'next/navigation'
export const metadata: Metadata = {
   title: `${process.env.WEBSITE_NAME} - not found`,  
 }
  
const notFoundCatchAll = async () => {
   notFound();
}
export default notFoundCatchAll