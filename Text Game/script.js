var Dictionary = ['action', 'append', 'allow', 'adobe', 'array', 'advanced', 'asphalt', 'access', 'alarm', 'autohotkey', 'android', 'aftereffects', 'back', 'backup', 'bluetooth', 'bit', 'byte', 'booting', 'bug', 'bootstrapping', 'bandwidth', 'baseband', 'batch', 'binary', 'c++', 'c', 'computer', 'cookie', 'cache', 'capslock', 'captcha', 'cardreader', 'cdma', 'chipset', 'circuit', 'class', 'client', 'clock', 'cloud', 'cluster', 'coaxialcable', 'coaxial', 'cable', 'coldboot', 'complier', 'daemon', 'data', 'dashboard', 'database', 'datagram', 'dbms', 'dataflow', 'ddr', 'debug', 'debuggger', 'defragment', 'desktop', 'developer', 'dialogbox', 'diode', 'directory', 'directx', 'disk', 'edge', 'extension', 'email', 'ebook', 'encoding', 'encryption', 'enterprise', 'enduser', 'ethernet', 'excel', 'executable', 'export', 'extensible', 'facebook', 'faq', 'fat', 'fiber', 'file', 'format', 'firewall', 'firewire', 'firmware', 'flash', 'floatingpoint', 'flops', 'font', 'footer', 'formula', 'frequency', 'freeware', 'function', 'gateway', 'gbps', 'gigabit', 'gigabyte', 'google', 'gpu', 'graphics', 'gui', 'hacker', 'harddisk', 'hash', 'hashtag', 'hdd', 'hdmi', 'header', 'headphones', 'hertz', 'hibernate', 'host', 'hostname', 'html', 'hub', 'hyperthreading', 'hyperlink', 'hypertext', 'hypervisor', 'io', 'icon', 'ide', 'ieee', 'internet', 'iframe', 'imap', 'inbox', 'index', 'input', 'install', 'installer', 'integrated', 'interface', 'intranet', 'isp', 'iso', 'java', 'javascript', 'joystick', 'jpeg', 'jquery', 'jumper', 'kernel', 'kbps', 'keyboard', 'keylogger', 'keyword', 'keystroke', 'kilobyte', 'kilobits', 'kilohertz', 'kindle', 'koffice', 'lag', 'lan', 'laptop', 'latency', 'lcd', 'lead', 'led', 'leftclick', 'link', 'linux', 'logfile', 'log', 'logic', 'logicgate', 'loop', 'lossy', 'macaddress', 'macos', 'machine', 'machinelanguage', 'macro', 'man', 'mainframe', 'mbps', 'media', 'megabit', 'megabyte', 'megapixel', 'memory', 'menubar', 'menu', 'metatag', 'meta', 'method', 'microphone', 'midi', 'minicomputer', 'minimize', 'mms', 'modem', 'mobile', 'monitor', 'mount', 'm4a', 'multimedia', 'multiprocessing', 'multitasking', 'multicore', 'nan', 'nanometer', 'nas', 'nativefile', 'native', 'netbois', 'newbie', 'nic', 'nino', 'node', 'oem', 'offline', 'office', 'ole', 'oled', 'opensource', 'operatingsystem', 'opticaldrive', 'optical', 'osx', 'osimodel', 'ota', 'output', 'packet', 'pagelayout', 'page', 'pan', 'parallel', 'parity', 'partition', 'password', 'path', 'pc', 'payload', 'pcb', 'pciexpress', 'pdu', 'petabyte', 'phishing', 'qbe', 'quadcore', 'quad', 'queue', 'quicktime', 'query', 'ram', 'raid', 'ransomware', 'rawdata', 'rdf', 'readonly', 'readme', 'record', 'recyclebin', 'register', 'refreshrate', 'refresh', 'registry', 'reimage', 'rendering', 'remoteuser', 'rendering', 'restore', 'rgb', 'ribbon', 'rip', 'root', 'rootdirectory', 'rom', 'router', 'rpc', 'ruby', 'runtime', 'runtimeerror', 'saas', 'safemode', 'sample', 'sampling', 'sass', 'sata', 'schema', 'screen', 'screenshot', 'scrolling', 'sdram', 'seed', 'serialport', 'serialnumber', 'server', 'session', 'shell', 'simcard', 'sim', 'smarthome', 'smartphone', 'smishing', 'snapshot', 'socialmedia', 'social', 'socket', 'solidstate', 'southbridge', 'spellcheck', 'spooling', 'spoofing', 'spool', 'spyware', 'sram', 'ssd', 'ssh', 'ssl', 'standalone', 'storage', 'startmenu', 'streaming', 'string', 'struct', 'subdirectory', 'swipe', 'sync', 'system', 'systemunit', 'tab', 'table', 'tag', 'tape', 'task', 'taskbar', 'tcp', 'tcpip', 'technology', 'telnet', 'terminal', 'text', 'textbox', 'terahertz', 'texteditor', 'thread', 'thumbnail', 'titlebar', 'toggle', 'touchpad', 'tracking', 'trash', 'trojan', 'ttl', 'troubleshooting', 'tweet', 'tweak', 'typeface', 'udp', 'unicode', 'uptime', 'uri', 'userinterface', 'user', 'username', 'utility', 'variable', 'vector', 'vectorgraphic', 'versioncontrol', 'version', 'vga', 'videocard', 'video', 'virtualmachine', 'virtual', 'virtualmemory', 'visualbasic', 'vlan', 'virus', 'volumn', 'w3c', 'wan', 'warmboot', 'wave', 'waveform', 'web', 'webpage', 'webhost', 'webserver', 'webcam', 'webmail', 'website', 'wep', 'whitepaper', 'whois', 'wifi', 'win32', 'window', 'windows', 'wired', 'word', 'wordprocessor', 'worm', 'wpa', 'www', 'xhtml', 'xml', 'xmp', 'xaml', 'yahoo', 'yosemite', 'youtube', 'yottabyte', 'zip', 'zonefile', 'zif', 'zettabyte', 'zerodayexploit', ];

/* -------------------- */

// Declarations
var Computer = 0;
var enteredWord = [];
var arrayofuser = [];
var arrayofcomputer = [];
var lastcharofComp;
var lastcharofUser;
var firstcharofUser;
var firstcharofComp;
var enterByUser;

/* ------------------- */


// function definations

function FirstTime(Dictionary) {
    Computer = Dictionary[Math.floor((Math.random() * Dictionary.length))];
    alert(Computer);
    enteredWord.push(Computer);
    arrayofcomputer.push(Computer);
    lastcharofComp = Computer.charAt(Computer.length - 1);
    alert(lastcharofComp);
}


function UserEnteringWord() {
    enterByUser = prompt("Enter Word: ");
    lastcharofUser = enterByUser.charAt(enterByUser.length - 1);
    firstcharofUser = enterByUser.charAt(0);
    if (firstcharofUser === lastcharofComp)
    {
        MainWorkforUser(lastcharofComp,firstcharofUser);
    }
    else
    {
        alert("Please Enter Legit Word");
        UserEnteringWord();
    }
}


function AlreadyEntered(enterByUser) {
    var previouslyEntered = false;

    var i;
    for (i = 0; i < enteredWord.length; i++) {
        if (enterByUser === enteredWord[i]) {
            previouslyEntered = true;
            break;
        }
    }

    return previouslyEntered;
}


function checkinDictionary(enterByUser) {
    var t;
    var foundinDictionary = false;
    for (t = 0; t < Dictionary.length; t++) {
        if (enterByUser === Dictionary[t]) {
            foundinDictionary = true;
            break;
        }
    }

    return foundinDictionary;
}


function CompEnteringWord() {
    Computer = Dictionary[Math.floor((Math.random() * Dictionary.length))];
    firstcharofComp = Computer.charAt(0);
    if (firstcharofComp === lastcharofUser) {
        lastcharofComp = Computer.charAt(Computer.length - 1);
        MainWorkforComp(lastcharofUser,firstcharofComp);
    }
    else
    {
        CompEnteringWord();
    }
}


function MainWorkforUser (lastcharofComp, firstcharofUser) {
    if (lastcharofComp === firstcharofUser) 
    {
        if (AlreadyEntered(enterByUser) == false) 
        {
            if (checkinDictionary(enterByUser) == true) 
            {
                alert("Well Done! You Entered Legit Word");
                enteredWord.push(enterByUser);
                CompEnteringWord();
            } 
            else 
            {
                alert("Please Enter Legit Word");
                UserEnteringWord();
            }
        } 
        else 
        {
            alert("Word Already Entered");
        }
    }
}


function MainWorkforComp (lastcharofUser,firstcharofComp) {
    if (lastcharofUser === firstcharofComp) 
    {
        if (AlreadyEntered(Computer) == false) 
        {
            if (checkinDictionary(Computer) == true) 
            {
                alert(Computer);
                alert(lastcharofComp);
                enteredWord.push(Computer);
                UserEnteringWord();
            }
        }
        else
        {
            alert("Word Already Entered");
        }
    }
}

/* ---------------------- */


// Calling Functions

FirstTime(Dictionary);

UserEnteringWord();


/* ---------------------- */

















// var a = ['action', 'append', 'allow', 'adobe', 'array', 'advanced', 'asphalt', 'access', 'alarm', 'autohotkey', 'android', 'aftereffects', ];

// var b = ['back', 'backup', 'bluetooth', 'bit', 'byte', 'booting', 'bug', 'bootstrapping', 'bandwidth', 'baseband', 'batch', 'binary', ];

// var c = ['c++', 'c', 'computer', 'cookie', 'cache', 'capslock', 'captcha', 'cardreader', 'cdma', 'chipset', 'circuit', 'class', 'client', 'clock', 'cloud', 'cluster', 'coaxialcable', 'coaxial', 'cable', 'coldboot', 'complier', ];

// var d = ['daemon', 'data', 'dashboard', 'database', 'datagram', 'dbms', 'dataflow', 'ddr', 'debug', 'debuggger', 'defragment', 'desktop', 'developer', 'dialogbox', 'diode', 'directory', 'directx', 'disk', ];

// var e = ['edge', 'extension', 'email', 'ebook', 'encoding', 'encryption', 'enterprise', 'enduser', 'ethernet', 'excel', 'executable', 'export', 'extensible', ];

// var f = ['facebook', 'faq', 'fat', 'fiber', 'file', 'format', 'firewall', 'firewire', 'firmware', 'flash', 'floatingpoint', 'flops', 'font', 'footer', 'formula', 'frequency', 'freeware', 'function', ];

// var g = ['gateway', 'gbps', 'gigabit', 'gigabyte', 'google', 'gpu', 'graphics', 'gui', ];

// var h = ['hacker', 'harddisk', 'hash', 'hashtag', 'hdd', 'hdmi', 'header', 'headphones', 'hertz', 'hibernate', 'host', 'hostname', 'html', 'hub', 'hyperthreading', 'hyperlink', 'hypertext', 'hypervisor', ];

// var i = ['io', 'icon', 'ide', 'ieee', 'internet', 'iframe', 'imap', 'inbox', 'index', 'input', 'install', 'installer', 'integrated', 'interface', 'intranet', 'isp', 'iso', ];

// var j = ['java', 'javascript', 'joystick', 'jpeg', 'jquery', 'jumper', ];

// var k = ['kernel', 'kbps', 'keyboard', 'keylogger', 'keyword', 'keystroke', 'kilobyte', 'kilobits', 'kilohertz', 'kindle', 'koffice', ];

// var l = ['lag', 'lan', 'laptop', 'latency', 'lcd', 'lead', 'led', 'leftclick', 'link', 'linux', 'logfile', 'log', 'logic', 'logicgate', 'loop', 'lossy', ];

// var m = ['macaddress', 'macos', 'machine', 'machinelanguage', 'macro', 'man', 'mainframe', 'mbps', 'media', 'megabit', 'megabyte', 'megapixel', 'memory', 'menubar', 'menu', 'metatag', 'meta', 'method', 'microphone', 'midi', 'minicomputer', 'minimize', 'mms', 'modem', 'mobile', 'monitor', 'mount', 'm4a', 'multimedia', 'multiprocessing', 'multitasking', 'multicore', ];

// var n = ['nan', 'nanometer', 'nas', 'nativefile', 'native', 'netbois', 'newbie', 'nic', 'nino', 'node', ];

// var o = ['oem', 'offline', 'office', 'ole', 'oled', 'opensource', 'operatingsystem', 'opticaldrive', 'optical', 'osx', 'osimodel', 'ota', 'output', ];

// var p = ['packet', 'pagelayout', 'page', 'pan', 'parallel', 'parity', 'partition', 'password', 'path', 'pc', 'payload', 'pcb', 'pciexpress', 'pdu', 'petabyte', 'phishing', ];

// var q = ['qbe', 'quadcore', 'quad', 'queue', 'quicktime', 'query', ];

// var r = ['ram', 'raid', 'ransomware', 'rawdata', 'rdf', 'readonly', 'readme', 'record', 'recyclebin', 'register', 'refreshrate', 'refresh', 'registry', 'reimage', 'rendering', 'remoteuser', 'rendering', 'restore', 'rgb', 'ribbon', 'rip', 'root', 'rootdirectory', 'rom', 'router', 'rpc', 'ruby', 'runtime', 'runtimeerror', ];

// var s = ['saas', 'safemode', 'sample', 'sampling', 'sass', 'sata', 'schema', 'screen', 'screenshot', 'scrolling', 'sdram', 'seed', 'serialport', 'serialnumber', 'server', 'session', 'shell', 'simcard', 'sim', 'smarthome', 'smartphone', 'smishing', 'snapshot', 'socialmedia', 'social', 'socket', 'solidstate', 'southbridge', 'spellcheck', 'spooling', 'spoofing', 'spool', 'spyware', 'sram', 'ssd', 'ssh', 'ssl', 'standalone', 'storage', 'startmenu', 'streaming', 'string', 'struct', 'subdirectory', 'swipe', 'sync', 'system', 'systemunit', ];

// var t = ['tab', 'table', 'tag', 'tape', 'task', 'taskbar', 'tcp', 'tcpip', 'technology', 'telnet', 'terminal', 'text', 'textbox', 'terahertz', 'texteditor', 'thread', 'thumbnail', 'titlebar', 'toggle', 'touchpad', 'tracking', 'trash', 'trojan', 'ttl', 'troubleshooting', 'tweet', 'tweak', 'typeface', ];

// var u = ['udp', 'unicode', 'uptime', 'uri', 'userinterface', 'user', 'username', 'utility', ];

// var v = ['variable', 'vector', 'vectorgraphic', 'versioncontrol', 'version', 'vga', 'videocard', 'video', 'virtualmachine', 'virtual', 'virtualmemory', 'visualbasic', 'vlan', 'virus', 'volumn', ];

// var w = ['w3c', 'wan', 'warmboot', 'wave', 'waveform', 'web', 'webpage', 'webhost', 'webserver', 'webcam', 'webmail', 'website', 'wep', 'whitepaper', 'whois', 'wifi', 'win32', 'window', 'windows', 'wired', 'word', 'wordprocessor', 'worm', 'wpa', 'www', ];

// var x = ['xhtml', 'xml', 'xmp', 'xaml', ];

// var y = ['yahoo', 'yosemite', 'youtube', 'yottabyte', ];

// var z = ['zip', 'zonefile', 'zif', 'zettabyte', 'zerodayexploit', ];

//alert(firstcharofUser);

// var usedAlready = 0;
// var found;

/* console.log(firstcharofUser === lastcharofComp); */

// if (firstcharofUser === lastcharofComp)
// {
//     for (i = 0; i < (enteredWord.length) ; i++)
//     {
//         if (enterByUser === enteredWord[i])
//         {
//             usedAlready = 1;
//             break;
//         }
//     }

//     if (usedAlready == 0)
//     {
//         for (t = 0; t < lastcharofComp.length ; t++)
//         {
//             if (enterByUser === lastcharofComp[t])
//             {
//                 arrayofuser.push(enterByUser);
//                 enteredWord.push(enterByUser);
//                 found = 1;
//                 console.log("Yes! You got right word");
//                 break;
//             }
//         }

//     }
//     else
//     {
//         console.log("Word Already Used!");
//     }
// }
// else
// {
//     console.log("Wrong Input");
// }

// if (found === 1)
// {
//     console.log("Right Word");
// }


// function CompSelection(lastcharofUser) {
//     Computer = lastcharofUser[Math.floor((Math.random() * lastcharofUser.length) + 0)];
//     enteredWord.push(Computer);
//     alert(Computer);
// }

// CompSelection(lastcharofUser);



//AlreadyEntered(enterByUser);

// if (AlreadyEntered(enterByUser) == true)
// {
//     console.log("Found Previously");
// }
// else
// {
//     console.log("Not Found Previously");
// }



// if (checkinDictionary(enterByUser) == true)
// {
//     console.log("Found in Dictionary");
// }
// else
// {
//     console.log("Not Found in Dictionary");
// }
