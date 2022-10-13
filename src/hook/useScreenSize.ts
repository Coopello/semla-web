import { useMediaQuery } from "@mantine/hooks";

/**
 * @package
 */
export const useScreenSize = () => {
  const isSM = useMediaQuery("(min-width: 590px)", false);
  const isMD = useMediaQuery("(min-width: 680px)", false);
  const isLG = useMediaQuery("(min-width: 1020px)", false);

  const screenSize = {
    lg: isLG,
    md: !isLG && isMD,
    sm: !isLG && !isMD && isSM,
    xs: !isLG && !isMD && !isSM,
  };

  return {
    screenSize,
    isMobile: screenSize.xs || screenSize.sm,
  };
};
