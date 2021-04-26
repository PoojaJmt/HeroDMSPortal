import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import InvoicesComponent from './Invoices/InvoicesComponent';
import InvoiceInfo from './Invoices/invoiceInfo';
import InvoiceDownload from './Invoices/downloadInvoice';
import ScheduleList from '../routes/schemeclaims/schemeList'
import Resubmission from './schemeclaims/resubmission'
import ClaimInfo from './schemeclaims/claimInfo'
import ProductList from './products/productList';
import ProductInfo from './products/productInfo';

const DashboardComponent = lazy(() => import('./dashboard'));

function PrivateRoutes() {
    return (
        <Suspense fallback={<LoadingComponent loading />}>
            <Switch>
                <Route exact path={SLUGS.home} component={DashboardComponent} />
                {/* <Route exact path={SLUGS.overviewTwo} render={() => <div>overviewTwo</div>} />
                <Route exact path={SLUGS.overviewThree} render={() => <div>overviewThree</div>} />
                <Route exact path={SLUGS.overview} render={() => <div>overview</div>} /> */}
                <Route exact path={SLUGS.invoices} component={InvoicesComponent} />
                <Route exact path={SLUGS.invoicedownload} component={InvoiceDownload}/>
                <Route exact path={SLUGS.invoiceInfo} component={InvoiceInfo}/>
                <Route exact path={SLUGS.products} component={ProductList} />
                <Route exact path={SLUGS.productInfo} component={ProductInfo}/>
                <Route exact path={SLUGS.scheme} component={ScheduleList} />
                <Route exact path={SLUGS.claimInfo} component={ClaimInfo}/>
                <Route exact path={SLUGS.resubmission} component={Resubmission}/>

                <Route exact path={SLUGS.scheme} render={() => <div>sceheme claims</div>} />
                <Route exact path={SLUGS.profile} render={() => <div>profile</div>} />
                
                <Redirect to={SLUGS.home} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
