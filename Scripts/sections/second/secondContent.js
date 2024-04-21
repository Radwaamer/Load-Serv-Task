const secondStepDiv=document.createElement("div");
const appendForm=document.forms[0];
const secondStepContent=`
        <button class="back-btn" type="button">&lt;&lt; back</button>
        <div class="container">
            <h2 class="form-title">Car Information</h2>
            <div class="col">
                <div>
                    <label for="part-name">Part's Name <span>*</span></label>
                    <input id="part-name" type="text" required>
                </div>
                <div>
                    <label for="part-quantity">Quantity <span>*</span></label>
                    <input id="part-quantity" type="number" min="1" value="1" required>
                </div>
            </div>
            <div class="col">
                <div>
                    <label  for="serial-number">Serial Number</label>
                    <input id="serial-number" type="text">
                </div>
                <div class="chassis">
                    <label for="chassis-number">Chassis Number <span>*</span></label>
                    <input id="chassis-number" type="text" required>
                </div>
            </div>
            <div>
                <label for="part-description">Part's Description</label>
                <textarea name="description" id="part-description" cols="30" rows="10"></textarea>
            </div>
            <div>
                <label for="part-photo">Part's Photo</label>
                <input type="file" name="photo" id="part-photo" accept="image/*">
            </div>
            <button type="button" class="main-btn submit get-parts">
                <p>Get Car Parts</p>
            </button>
        </div>
        `;
secondStepDiv.className="form-data second-step";
secondStepDiv.innerHTML=secondStepContent;