tiapp.xml update tool
======================

Tool for updating the tiapp.xml


Install
-------

```
$ [sudo] npm install -g umi-uyura/tiapp-update
```


Usage
-----

Basic form:

```
$ tiapp-update <command> <parameter>
```

Shortened form:

```
$ tiapp <command> <parameter>
```


Commands:

### Guid

Show guid:

```
$ tiapp-update guid show
11111111-1111-1111-1111-111111111111
```

Reset guid:

```
$ tiapp-update guid reset       # <guid>11111111-1111-1111-1111-111111111111</guid>
```

Set guid:

```
$ tiapp-update guid set 4fd5a719-966e-46e6-8678-7b5a72f4dd94      # <guid>4fd5a719-966e-46e6-8678-7b5a72f4dd94</guid>
```

Re-generate guid:

```
$ tiapp-update guid new                                           # <guid>c68a4569-bfbd-244e-2244-5b35b8333101</guid>
Generate guid: c68a4569-bfbd-244e-2244-5b35b8333101
```

### Sdk version

Show sdk version:

```
$ tiapp-update sdk
5.1.2.GA
```

Change sdk version

```
$ tiapp-update sdk 5.1.2.GA     # <sdk-version>5.1.2.GA</sdk-version>
```

### App version

Show app version:

```
$ tiapp-update app version
1.0.0
```

Change app version:

```
$ tiapp-update app version 1.0.0    # <version>1.0.0</version>
```
