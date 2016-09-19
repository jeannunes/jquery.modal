# JQuery Modal

JQuery Modal is a JQuery Plugin wich allows you to transform your html elements into modal windows.

## Instalation

JQuery Modal requires JQuery to work properly. If you want it working 120%, you have to add some elements to your code.
First load the file `jquery.modal.css`
```
<head>
	...
	<link rel='stylesheet' type='text/css' href='jquery.modal.css'/>
</head>
```
```
<body>
	...
	<script src='jquery.modal.js' type='text/javascript'></script>
</body>
```

## Usage

JQuery Modal doesn't require any previous configurations. You can use it as it is by default. Simply add the attribute `data-modal` with a reference to your modal element. For example:
```
<a data-modal='#example'>Modal</a>
<div class='modal' id='example'>
  <div class='modal-title'>
    <div class='modal-title-content'>Titulo</div>
    <a class='modal-close'>X</a>
  </div>
  <div class='modal-body'>
    Content comes here
  </div>
</div>
```
In this example, when the Modal button is clicked, the window shows up.

## Releases

[Click here](https://github.com/jeannunes/jquery.modal/releases/) to access all the available releases.

## Credits

The whole plugin has been developed by me.
