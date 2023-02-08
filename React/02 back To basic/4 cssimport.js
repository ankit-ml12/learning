'to import css we simply create a index.css in src folder & import it'
import './index.css'

//if you want to use inline css inside the index.js file you can like this;
;`
style={{ fontsize: "10px", marginTop: "10px", marginBottom: "10px" }}

` //for external css you can import css file and can use className or element
`
Local Images (Public Folder)
Optional Video !!!

external images (hosted on different server) - just need an url

local images (public folder) - less performant

local images (src folder) - better solution for assets, since under the hood they get optimized.

save image (Save Image As....)

create images folder in public

copy/paste image

rename (optional)

replace url in the src - './images/imageName.extension'

'./' because assets are on the same server
`
// whatever assets we place in public - instantly available
// domain(localhost)/asset
