Ext.onReady(function() {
    Ext.state.Manager.setProvider(new Ext.state.CookieProvider());
    Ext.QuickTips.init();

    // Menus can be prebuilt and passed by reference
    var dateMenu = new Ext.menu.DateMenu({
        handler: function(dp, date) {
            Ext.example.msg('Date Selected', 'You chose {0}.', date.format('M j, Y'));
        }
    });

    var colorMenu = new Ext.menu.ColorMenu({
        handler: function(cm, color) {
            Ext.example.msg('Color Selected', 'You chose {0}.', color);
        }
    });

    var menu = new Ext.menu.Menu({
        id: 'mainMenu',
        items: [{
            text: 'I like Ext',
            checked: true,
            // when checked has a boolean value, it is assumed to be a CheckItem
            checkHandler: onItemCheck
        },
        {
            text: 'Ext for jQuery',
            checked: true,
            checkHandler: onItemCheck
        },
        {
            text: 'I donated!',
            checked: false,
            checkHandler: onItemCheck
        },
        '-', {
            text: 'Radio Options',
            menu: {
                // <-- submenu by nested config object
                items: [
                // stick any markup in a menu
                '<b class="menu-title">Choose a Theme</b>',
                {
                    text: 'Aero Glass',
                    checked: true,
                    group: 'theme',
                    checkHandler: onItemCheck
                },
                {
                    text: 'Vista Black',
                    checked: false,
                    group: 'theme',
                    checkHandler: onItemCheck
                },
                {
                    text: 'Gray Theme',
                    checked: false,
                    group: 'theme',
                    checkHandler: onItemCheck
                },
                {
                    text: 'Default Theme',
                    checked: false,
                    group: 'theme',
                    checkHandler: onItemCheck
                }]
            }
        },
        {
            text: 'Choose a Date',
            iconCls: 'calendar',
            menu: dateMenu
            // <-- submenu by reference
        },
        {
            text: 'Choose a Color',
            menu: colorMenu
            // <-- submenu by reference
        }
        ]
    });

    var tb = new Ext.Toolbar();
    tb.render('Menu');

    var viewport = new Ext.Viewport({
        layout: 'border',
        items: [
        new Ext.BoxComponent({
            region: 'north',
            el: 'Menu',
            height: 32
        }),
        {
            region: 'south',
            contentEl: 'Console',
            split: true,
            height: 100,
            minSize: 100,
            maxSize: 200,
            collapsible: true,
            title: 'Console',
            margins: '0 0 0 0'
        },
        {
            region: 'east',
            title: 'Tool Palette',
            collapsible: true,
            split: true,
            width: 225,
            minSize: 175,
            maxSize: 400,
            layout: 'fit',
            margins: '0 5 0 0',
            items:
            new Ext.TabPanel({
                border: false,
                activeTab: 1,
                tabPosition: 'bottom',
                items: [
                {
                    contentEl: 'TypePalette',
                    title: 'Types',
                    autoScroll: true
                },
                {
                    contentEl: 'Properties',
                    title: 'Properties',
                    autoScroll: true
                },
                new Ext.grid.PropertyGrid({
                    title: 'Inspector',
                    closable: true,
                    source: {
                        "CID": "62c16b3b7902361115e5ff93dbc9278a",
                        "UUID": "F240D442-4645-41CF-B0DC-E94306C7AF20",
                        "Parent": true,
                        "Type": "Model",
                        "Created": new Date(Date.parse('10/15/2006')),
                    }
                })
                ]
            })
        },
        new Ext.tree.TreePanel({
            region: 'west',
            id: 'collection',
            title: 'Collection',
            width: 200,
            minSize: 175,
            maxSize: 400,
            collapsible: true,
            margins: '0 0 0 5',
            animate: true,
            containerScroll: true,
            enableDD: true,
            ddGroup: 'CollectionDD',
            rootVisible: false,
            autoScroll: false,
            loader: new Ext.tree.TreeLoader({
                dataUrl: '/javascripts/ydm/schema.json',
				requestMethod: 'GET'
            }),
            root: {
                nodeType: 'async',
                text: 'Root',
                draggable: false,
                id: '0'
            }
        }),
        new Ext.TabPanel({
            region: 'center',
            deferredRender: false,
            activeTab: 0,
            items: [
            {
                title: 'Data Model',
                contentEl: 'DataModel',
                autoScroll: true
            },
            {
                title: 'Data Graph',
                contentEl: 'DataGraph',
                autoScroll: true
            },
            {
                title: 'Data Entry Form',
                labelAlign: 'top',
                frame: true,
                bodyStyle: 'padding:5px 5px 0',
                width: 600,
                items: [{
                    layout: 'column',
                    items: [
                    {
                        columnWidth: .5,
                        layout: 'form',
                        items: [
                        {
                            xtype: 'textfield',
                            fieldLabel: 'First Name',
                            name: 'first',
                            anchor: '95%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Company',
                            name: 'company',
                            anchor: '95%'
                        }
                        ]
                    },
                    {
                        columnWidth: .5,
                        layout: 'form',
                        items: [{
                            xtype: 'textfield',
                            fieldLabel: 'Last Name',
                            name: 'last',
                            anchor: '95%'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Email',
                            name: 'email',
                            vtype: 'email',
                            anchor: '95%'
                        }]
                    },
                    {
                        xtype: 'htmleditor',
                        id: 'bio',
                        fieldLabel: 'Biography',
                        height: 200,
                        anchor: '98%'
                    },
                    {
                        buttons: [{
                            text: 'Save'
                        },
                        {
                            text: 'Cancel'
                        }]
                    }]
                }]
            }]
        })
        ]
    });

	tb.add({
	    text: 'Collection',
	    iconCls: 'bmenu',
	    menu: menu
	},
    new Ext.Toolbar.MenuButton({
        text: 'Split Button',
        handler: onButtonClick,
        tooltip: {
            text: 'This is a an example QuickTip for a toolbar item',
            title: 'Tip Title'
        },
        iconCls: 'blist',
        // Menus can be built/referenced by using nested menu config objects
        menu: {
            items: [
            {
                text: '<b>Bold</b>',
                handler: onItemClick
            },
            {
                text: '<i>Italic</i>',
                handler: onItemClick
            },
            {
                text: '<u>Underline</u>',
                handler: onItemClick
            },
            '-', {
                text: 'Pick a Color',
                handler: onItemClick,
                menu: {
                    items: [
                    new Ext.menu.ColorItem({
                        selectHandler: function(cp, color) {
                            Ext.example.msg('Color Selected', 'You chose {0}.', color);
                        }
                    }), '-',
                    {
                        text: 'More Colors...',
                        handler: onItemClick
                    }
                    ]
                }
            },
            {
                text: 'Extellent!',
                handler: onItemClick
            }
            ]
        }
    }), '-', {
        text: 'Toggle Me',
        enableToggle: true,
        toggleHandler: onItemToggle,
        pressed: true
    });

    menu.addSeparator();
    // Menus have a rich api for
    // adding and removing elements dynamically
    var item = menu.add({
        text: 'Dynamically added Item'
    });
    // items support full Observable API
    item.on('click', onItemClick);

    // items can easily be looked up
    menu.add({
        text: 'Disabled Item',
        id: 'disableMe'
        // <-- Items can also have an id for easy lookup
        // disabled: true   <-- allowed but for sake of example we use long way below
    });
    // access items by id or index
    menu.items.get('disableMe').disable();

    // They can also be referenced by id in or components
    tb.add('-', {
        icon: 'list-items.gif',
        // icons can also be specified inline
        cls: 'x-btn-icon',
        tooltip: '<b>Quick Tips</b><br/>Icon only button with tooltip'
    },
    '-');

    // some data used in the examples
    Ext.namespace('Ext.exampledata');

    Ext.exampledata.states = [
    ['AL', 'Alabama'],
    ['AK', 'Alaska'],
    ['AZ', 'Arizona'],
    ['AR', 'Arkansas'],
    ['CA', 'California'],
    ['CO', 'Colorado'],
    ['CN', 'Connecticut'],
    ['DE', 'Delaware'],
    ['DC', 'District of Columbia']];

    // add a combobox to the toolbar
    var store = new Ext.data.SimpleStore({
        fields: ['abbr', 'state'],
        data: Ext.exampledata.states
        // from states.js
    });
    var combo = new Ext.form.ComboBox({
        store: store,
        displayField: 'state',
        typeAhead: true,
        mode: 'local',
        triggerAction: 'all',
        emptyText: 'Select a state...',
        selectOnFocus: true,
        width: 135
    });
    tb.addField(combo);

    // Ext.get("hideit").on('click', function() {
    //    var w = Ext.getCmp();
    //    w.collapsed ? w.expand() : w.collapse();
    // });
    // functions to display feedback
    function onButtonClick(btn) {
        var console = document.getElementById('Console');
        var msg = 'Button Click - You clicked the ' + btn.text + ' button.</br>';
        console.innerHTML += msg
    }

    function onItemClick(item) {
        var console = document.getElementById('Console');
        var msg = 'Menu Click - You clicked the ' + item.text + ' menu item.</br>';
        console.innerHTML += msg
    }

    function onItemCheck(item, checked) {
        var console = document.getElementById('Console');
        // var msg = 'Item Check - You {1} the "{0}" menu item.', item.text, checked ? 'checked': 'unchecked';
        console.innerHTML += msg
        // Ext.example.msg('Item Check', 'You {1} the "{0}" menu item.', item.text, checked ? 'checked': 'unchecked');
    }

    function onItemToggle(item, pressed) {
        var console = document.getElementById('Console');
        var msg = 'Button Toggled - Button ' + item.next + ' was toggled to ' + pressed + '.</br>';
        console.innerHTML += msg
    }

});
