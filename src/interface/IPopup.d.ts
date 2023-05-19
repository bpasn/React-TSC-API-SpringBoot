interface IPopup {
    settingPopup:boolean,
    title:string,
    description:string,
    callback?:(param:any) => any;
}