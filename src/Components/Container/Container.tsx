import { ScreenSizes } from "../../constants";

interface ContainerProps {
  children?: React.ReactNode[];
}

export default function Container({ children }: ContainerProps) {
  return (
    <div style={styles.container}>{children}</div>
  )
}

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: ScreenSizes.ContainerMaxWidth,
    width: '100%',
    overflow: 'hidden'
  },
};
