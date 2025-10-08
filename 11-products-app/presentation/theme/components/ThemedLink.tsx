import { useThemeColor } from '@/hooks/use-theme-color';
import { Link, LinkProps } from 'expo-router';



interface Props extends LinkProps {}

const ThemedLink = ({ style, ...rest }: Props) => {
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <Link
      style={[
        {
          color: primaryColor,
        },
        style,
      ]}
      {...rest}
    />
  );
};
export default ThemedLink;