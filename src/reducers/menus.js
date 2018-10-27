const OPEN_MENU = 'scratch-gui/menus/OPEN_MENU';
const CLOSE_MENU = 'scratch-gui/menus/CLOSE_MENU';

const MENU_FILE = 'fileMenu';
const MENU_EDIT = 'editMenu';
const MENU_HARDWARE = 'hardwareMenu';
const MENU_LANGUAGE = 'languageMenu';

const ARDUINO_MENU = 'arduinoMenu';
const UPLOAD_MENU = 'uploadMenu';

const initialState = {
    [MENU_FILE]: false,
    [MENU_EDIT]: false,
    [MENU_LANGUAGE]: false,
    arduinoMenuClicked: false,
    uploadMenuClicked: false
};

const reducer = function (state, action) {
    if (typeof state === 'undefined') state = initialState;
    const {uploadMenuClicked} = state;
    switch (action.type) {
    case OPEN_MENU:
        return Object.assign({}, state, {
            [action.menu]: true
        });
    case CLOSE_MENU:
        return Object.assign({}, state, {
            [action.menu]: false
        });
    case ARDUINO_MENU:
        return Object.assign({}, state, {
            arduinoMenuClicked: true
        });
    case UPLOAD_MENU:
        return Object.assign({}, state, {
            uploadMenuClicked: !uploadMenuClicked
        });
    default:
        return state;
    }
};
const openMenu = menu => ({
    type: OPEN_MENU,
    menu: menu
});
const closeMenu = menu => ({
    type: CLOSE_MENU,
    menu: menu
});

const clickArduinoMenu = () => ({
    type: ARDUINO_MENU
});

const clickUploadMenu = () => ({
    type: UPLOAD_MENU
});

const openFileMenu = () => openMenu(MENU_FILE);
const closeFileMenu = () => closeMenu(MENU_FILE);
const fileMenuOpen = state => state.scratchGui.menus[MENU_FILE];
const openEditMenu = () => openMenu(MENU_EDIT);
const closeEditMenu = () => closeMenu(MENU_EDIT);
const editMenuOpen = state => state.scratchGui.menus[MENU_EDIT];
const openHardwareMenu = () => openMenu(MENU_HARDWARE);
const closeHardwareMenu = () => closeMenu(MENU_HARDWARE);
const hardwareMenuOpen = state => state.scratchGui.menus[MENU_HARDWARE];
const openLanguageMenu = () => openMenu(MENU_LANGUAGE);
const closeLanguageMenu = () => closeMenu(MENU_LANGUAGE);
const languageMenuOpen = state => state.scratchGui.menus[MENU_LANGUAGE];
const openUploadMenu = () => openMenu(UPLOAD_MENU);
const closeUploadMenu = () => closeMenu(UPLOAD_MENU);
const uploadMenuOpen = state => state.scratchGui.menus[UPLOAD_MENU];

export {
    reducer as default,
    initialState as menuInitialState,
    openFileMenu,
    closeFileMenu,
    openEditMenu,
    closeEditMenu,
    openHardwareMenu,
    closeHardwareMenu,
    openLanguageMenu,
    closeLanguageMenu,
    openUploadMenu,
    closeUploadMenu,
    fileMenuOpen,
    editMenuOpen,
    hardwareMenuOpen,
    languageMenuOpen,
    uploadMenuOpen,
    clickArduinoMenu,
    clickUploadMenu
};
