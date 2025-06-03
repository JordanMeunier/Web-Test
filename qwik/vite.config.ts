import { defineConfig, type UserConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import pkg from './package.json';

type PkgDep = Record<string, string>;
const { dependencies = {}, devDependencies = {} } = pkg as any as {
  dependencies: PkgDep;
  devDependencies: PkgDep;
  [key: string]: unknown;
};

errorOnDuplicatesPkgDeps(devDependencies, dependencies);

export default defineConfig(({ command, mode }): UserConfig => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],

    build: {
      outDir: '../src/public',
      emptyOutDir: true,
    },

    optimizeDeps: {
      exclude: [],
    },

    server: {
      headers: {
        'Cache-Control': 'public, max-age=0',
      },
    },
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});

// Vérifie les dépendances en double
function errorOnDuplicatesPkgDeps(
  devDependencies: PkgDep,
  dependencies: PkgDep
) {
  const duplicateDeps = Object.keys(devDependencies).filter(
    (dep) => dependencies[dep]
  );

  const qwikPkg = Object.keys(dependencies).filter((value) =>
    /qwik/i.test(value)
  );

  if (qwikPkg.length > 0) {
    throw new Error(
      `Déplace les packages Qwik suivants dans "devDependencies" : ${qwikPkg.join(', ')}`
    );
  }

  if (duplicateDeps.length > 0) {
    throw new Error(`
      Attention : la dépendance "${duplicateDeps.join(', ')}" est dans "dependencies" ET "devDependencies".
      Elle doit être uniquement dans "devDependencies".
    `);
  }
}
