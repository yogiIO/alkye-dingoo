import { RouterProvider } from 'react-router-dom'
import router from '../configs/routes.config/routes.config';
import store from '../store'
import { Provider } from 'react-redux'
import { Suspense } from 'react';
import Loader from '../components/common/Loader';


export default function Views() {
    return (
        <Suspense fallback={<Loader />}>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </Suspense>
    )
}
