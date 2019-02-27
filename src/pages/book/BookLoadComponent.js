import Loadable from 'react-loadable';
import React from 'react';

function Loading() {
  return <div>Loading...</div>
}

const LoadableComponent = Loadable({
  loader: () => import('./Book'),
  loading: Loading
});

const LoadableDashboard = () => (
  <LoadableComponent />
)

export default LoadableDashboard;