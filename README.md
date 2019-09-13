# Apium Button Library

This project contain a button directive to set buttons styles

## Use

> module you want use this library

```javascript
import { AaButtonModule } from '@aaButtons';

@NgModule({
  ...
  imports: [
    ...
    AaButtonModule
    ...
  ]
```

> In HTML file

```html
  <!-- In Any button tag, add aaBtn directive -->
  <button aaBtn>Button</button>
```

- Use of size property

> Size has three options ( small, medium, large ) , if size property isn't set medium by default

```html
  <button aaBtn size="small">small</button>
  <button aaBtn size="medium"> Medium </button>
  <button aaBtn size="large"> Large </button>
```

- Use of color property

> Color has three options ( primary, secondary, danger ) default value is primary

```html
  <button aaBtn color="primary"> default </button>
  <button aaBtn color="secondary"> secondary </button>
  <button aaBtn color="danger"> danger </button>
```

- Use of type property

> Type property has three options ( default, outline, ghost ), default value is default

```html
  <button aaBtn type="outline" color="primary"> outline </button>
  <button aaBtn color="secondary"> secondary </button>
  <button aaBtn type="ghost" color="danger"> danger </button>
```

- Use of Icon property

> You can set any name of font awesome icon that exist in free version

```html
  <button aaBtn color="primary" icon="camera"> Camera </button>
  <button aaBtn color="secondary" icon="search">  Search </button>
  <button aaBtn color="danger" icon="star"> Star </button>
```

- Use of slot property

> This property only works if icon property is setted and it has three options ( left, right, icon-only ) the funcionality of this property is for positioning the icon in button label, default value is Right.

> Note: icon-only property remove other text seted in button tag 

```html
  <button aaBtn type="ghost" color="primary" icon="camera" slot="right"> Camera </button>
  <button aaBtn type="ghost" color="secondary" icon="search" slot="left"> search </button>

  <!--  both are the same -->
  <button aaBtn type="ghost" color="danger" icon="star"></button> 
    or 
  <button aaBtn type="ghost" color="danger" icon="star" slot="icon-only"> star </button>
```

> Any convination of this params can be used if aaBtn directive is setted in some tag Button

