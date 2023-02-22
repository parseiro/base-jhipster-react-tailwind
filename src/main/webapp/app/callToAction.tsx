import React from 'react';

export function CallToAction() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Venha conhecer um pouco mais do que nos une
          </h2>
          <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim
            nec dui nunc mattis enim ut tellus elementum sagittis. Platea dictumst quisque sagittis purus. Elementum tempus egestas sed sed.
            Sem integer vitae justo eget magna. Vitae et leo duis ut. Lacus sed viverra tellus in hac. Aliquet enim tortor at auctor urna
            nunc id cursus. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed nisi lacus sed viverra tellus in hac
            habitasse platea. In fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Fames ac turpis egestas maecenas. Nullam
            ac tortor vitae purus faucibus ornare suspendisse. Sed sed risus pretium quam vulputate dignissim suspendisse in. Sem nulla
            pharetra diam sit amet nisl suscipit adipiscing bibendum. Enim praesent elementum facilisis leo vel fringilla est. Ante in nibh
            mauris cursus mattis. Non nisi est sit amet facilisis magna etiam. Nec nam aliquam sem et. Elementum integer enim neque volutpat
            ac tincidunt vitae semper quis.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-4 py-2.5 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Doar agora
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-4 py-2.5 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              Saber mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
