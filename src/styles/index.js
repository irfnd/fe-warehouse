import { extendTheme } from '@chakra-ui/react';

// Foundations Styles
import fonts from '@/styles/foundations/fonts';
import fontWeights from '@/styles/foundations/fontWeights';

const theme = extendTheme({
	fonts,
	fontWeights,
});

export default theme;
