import { FC, ReactNode } from 'react';

import classes from './Container.module.css';

interface IContainerProps {
   children: ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
   return <div className={classes.Container}>{children}</div>;
};

export default Container;
