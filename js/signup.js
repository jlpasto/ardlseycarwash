/* ================================================
   SIGNUP PAGE — Form logic & plan detection
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ===== PLAN DATA =====
  const plans = {
    regular: {
      name: 'Regular Monthly Car Wash',
      price: '$50.74/mo'
    },
    ultimate: {
      name: 'Ultimate Monthly Car Wash',
      price: '$64.58/mo'
    }
  };


  // ===== DETECT SELECTED PLAN FROM URL =====
  const params = new URLSearchParams(window.location.search);
  const planKey = params.get('plan');
  const planNameEl = document.getElementById('planName');
  const planPriceEl = document.getElementById('planPrice');

  if (planKey && plans[planKey]) {
    const plan = plans[planKey];
    planNameEl.textContent = plan.name;
    planPriceEl.textContent = plan.price;
  } else {
    // Default if no plan specified
    planNameEl.textContent = 'Unlimited Wash Club';
    planPriceEl.textContent = 'Select a plan to see pricing';
  }


  // ===== POPULATE YEAR DROPDOWN =====
  const yearSelect = document.getElementById('year');
  const currentYear = new Date().getFullYear();

  for (let y = currentYear + 1; y >= 2000; y--) {
    const opt = document.createElement('option');
    opt.value = y;
    opt.textContent = y;
    yearSelect.appendChild(opt);
  }


  // ===== POPULATE MAKE DROPDOWN =====
  const makeSelect = document.getElementById('make');
  const makes = [
    'Acura', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler',
    'Dodge', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai', 'Infiniti',
    'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Mazda',
    'Mercedes-Benz', 'Mini', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram',
    'Rivian', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo', 'Other'
  ];

  makes.forEach(make => {
    const opt = document.createElement('option');
    opt.value = make;
    opt.textContent = make;
    makeSelect.appendChild(opt);
  });


  // ===== FORM SUBMISSION =====
  const form = document.getElementById('signupForm');
  const successEl = document.getElementById('signupSuccess');
  const backLink = document.getElementById('backLink');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Hide form, show success
      form.style.display = 'none';
      if (backLink) backLink.style.display = 'none';
      successEl.classList.add('visible');
      successEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});
