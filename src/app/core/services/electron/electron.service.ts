import { Injectable, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as childProcess from 'child_process';
// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, Menu, remote, webFrame } from 'electron';
import * as fs from 'fs';


@Injectable({
    providedIn: 'root'
})
export class ElectronService {
    ipcRenderer: typeof ipcRenderer;
    webFrame: typeof webFrame;
    remote: typeof remote;
    childProcess: typeof childProcess;
    fs: typeof fs;
    menu: typeof Menu;
    // menuItem: typeof MenuItem;

    template: any = [
        {
            label: 'File',
            submenu: [
                { role: 'close' },
            ]
        },
        {
            label: 'Test',
            submenu: [
                {
                    label: 'Home',
                    click: async () => {
                        this.ngZone.run(() => {
                            this.router.navigate(['/home']);
                        });
                    }
                },
                {
                    label: 'About',
                    click: async () => {
                        this.ngZone.run(() => {
                            this.router.navigate(['/about/0']);
                        });
                    }
                },
                { type: 'separator' },
                {
                    label: 'Open External',
                    click: async () => {
                        const { shell } = require('electron')
                        await shell.openExternal('https://electronjs.org')
                    }
                },
                {
                    label: 'Checkbox',
                    type: 'checkbox',
                    checked: true,
                    accelerator: 'Ctrl+E',
                    click: async (menuItem, x, keyEvent) => {
                        console.log('checkbox', menuItem.checked);
                    }
                },
            ]
        },
        // {
        //     label: 'Edit',
        //     submenu: [
        //         { role: 'undo' },
        //         { role: 'redo' },
        //         { role: 'cut' },
        //         { role: 'copy' },
        //         { role: 'paste' },
        //         { role: 'pasteandmatchstyle' },
        //         { role: 'delete' },
        //         { role: 'selectall' }
        //     ]
        // },
        {
            label: 'Debug',
            submenu: [
                { role: 'reload', accelerator: 'F5' },
                { role: 'forcereload' },
                { role: 'toggledevtools', accelerator: 'F12' },
                { type: 'separator' },
                { role: 'resetzoom' },
                { role: 'zoomin' },
                { role: 'zoomout' },
                { role: 'togglefullscreen' }
            ]
        },
        // {
        //     role: 'window',
        //     submenu: [
        //         { role: 'minimize' },
        //         { role: 'close' }
        //     ]
        // }
    ];

    get isElectron(): boolean {
        return !!(window && window.process && window.process.type);
    }

    constructor(
        private ngZone: NgZone,
        private router: Router,
        // private location: Location,

        private route: ActivatedRoute,
    ) {
        // Conditional imports
        if (this.isElectron) {
            this.ipcRenderer = window.require('electron').ipcRenderer;
            this.webFrame = window.require('electron').webFrame;
            this.remote = window.require('electron').remote;
            this.childProcess = window.require('child_process');
            this.fs = window.require('fs');

            this.menu = this.remote.Menu;
            const menu = this.menu.buildFromTemplate(this.template);

            // console.log('----------');
            // console.log(this.menu);
            // console.log('----------');

            // const { Menu, MenuItem } = remote;
            // this.menu.append(new MenuItem({ label: 'MenuItem', type: 'checkbox', checked: true }))


            this.menu.setApplicationMenu(menu);
        }
    }
}
