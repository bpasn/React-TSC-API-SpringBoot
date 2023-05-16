import { Box, Grid} from '@mui/material'
import {Image , CarouselProvider,  Slide, Slider } from 'pure-react-carousel';
import { ImageTab } from './Styled';

interface Props {
    images?: string[]
}

const ProductDetailImage = ({ images }: Props) => {

    return (
        <Grid container >
            <Grid item md={1} sx={{
                display: { sm: "none", md: "block" }
            }}>
                <ImageTab>
                    {images?.map((img: string, index: number) => <img key={index} width={"100%"} height={"100%"} src={img} alt={'index' + index} />)}
                </ImageTab>
            </Grid>
            <Grid item md={11} sm={12}>
                <Box sx={{
                    margin: '0 auto',
                    overflow: 'hidden',
                    textAlign: 'center',
                }}>
                    <CarouselProvider
                        isIntrinsicHeight={true}
                        lockOnWindowScroll={true}
                        naturalSlideWidth={100}
                        naturalSlideHeight={100}
                        totalSlides={images?.length ?? 0}
                    >
                        <Slider preventVerticalScrollOnTouch={true}>
                            {images?.map((image: string, index: number) => {
                                return <Slide index={index} key={index}>
                                    <Image  src={image} hasMasterSpinner={false}/> 
                                </Slide>
                            })}

                        </Slider>
                        
                    </CarouselProvider>
                </Box>
            </Grid>
        </Grid>
    )
}

export default ProductDetailImage