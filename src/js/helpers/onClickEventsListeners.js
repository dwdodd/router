import userSuscription from "../components/user/userSuscription.js";
import beginSuscription from "../components/beginSuscription.js";
import profileSuscription from "../components/profile/profileSuscription.js";

const onClickEventsListeners = () => {
    root.addEventListener('click', async (e) => {
        e.preventDefault();

        const matchReturn = (el) => e.target.matches(el);

        /** Begin Suscription */
        if (matchReturn('#btn-login'))        beginSuscription('auth-rc');
        if (matchReturn('#dashboard'))        beginSuscription('dashboard-rc');
        if (matchReturn('#dash-users'))       beginSuscription('users-rc');
        if (matchReturn('#dash-profiles'))    beginSuscription('profiles-rc');
        if (matchReturn('#dash-roles'))       beginSuscription('roles-rc');
        if (matchReturn('#dash-permissions')) beginSuscription('permissions-rc');
        if (matchReturn('.page-link'))        beginSuscription('page-link-rc');
        if (matchReturn('#btn-search'))       beginSuscription('page-link-search-rc');
        if (matchReturn('.col-index'))        beginSuscription('col-index-rc', e.target.dataset.colIndex);
        if (matchReturn('#clear-search'))     beginSuscription('clear-search-rc');
        if (matchReturn('#out'))              beginSuscription('out-rc');

        /** Users */
        if (matchReturn('#add-user'))      userSuscription('add-user-rc');
        if (matchReturn('#save-add-user')) userSuscription('add-user-fb');
        if (matchReturn('.edit-user'))     userSuscription('edit-user-rc', e.target.dataset);
        if (matchReturn('.block-user'))    userSuscription('block-user-rc', e.target.dataset)

        /** Profiles */
        if (matchReturn('#add-profile'))  profileSuscription('add-profile-rc');
        if (matchReturn('.edit-profile')) profileSuscription('edit-profile-rc', e.target.dataset);
    });
}

export default onClickEventsListeners;