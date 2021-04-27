import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import SLUGS from 'resources/slugs';
import LoadingComponent from 'components/loading';
import InvoicesComponent from './Invoices/InvoicesComponent';
import InvoiceInfo from './Invoices/invoiceInfo';
import InvoiceDownload from './Invoices/downloadInvoice';
import ClaimInfo from './schemeclaims/claimInfo'
import ProductList from './products/productList';
import ProductInfo from './products/productInfo';
import SchemeList from '../routes/schemeclaims/schemeList';
import CustomerComponent from './customers/customers';
import CustomerInfo from './customers/customerInfo';
import CustomerDetails from './customers/customerDetails';
import ComplaintsList from './complaints/complaintsList';
import ComplaintInfo from './complaints/complaintInfo';
import NewComplaint from './complaints/newComplaint';

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
                <Route exact path={SLUGS.scheme} component={SchemeList}/>
             
                <Route exact path={SLUGS.ClaimInfo} component={ClaimInfo}/>
                <Route exact path={SLUGS.customers} component={CustomerComponent}/>
                <Route exact path={SLUGS.customerInfo} component={CustomerInfo}/>
                <Route exact path={SLUGS.customerDetails} component={CustomerDetails}/>
                <Route exact path={SLUGS.complaints} component={ComplaintsList}/>
                <Route exact path={SLUGS.complaintInfo} component={ComplaintInfo}/>
                <Route exact path={SLUGS.newComplaint} component={NewComplaint}/>

                
                <Route exact path={SLUGS.profile} render={() => <div>profile</div>} />
                
                <Redirect to={SLUGS.home} />
            </Switch>
        </Suspense>
    );
}

export default PrivateRoutes;
