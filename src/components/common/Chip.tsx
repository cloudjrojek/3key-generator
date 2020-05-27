import React from 'react';
import { palette, typography } from '../../styles';

interface Props {
  label: string;
}

export class Chip extends React.PureComponent<Props> {
  render() {
    return (
      <span style={styles.label}>{this.props.label}</span>
    );
  }
}

const styles = {
  label: {
    ...typography.headline5,
    textAlign: 'center' as const,
    padding: 8,
    backgroundColor: palette.backgroundDarker,
    borderRadius: 4,
    marginEnd: 16,
    marginBottom: 16,
  },
}